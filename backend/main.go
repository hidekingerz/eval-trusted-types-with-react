// Backend for the Trusted Types evaluation.
//
// It is intentionally tiny: it hands the SPA some "untrusted" HTML, serves a
// script whose execution can be observed, and collects CSP violation reports
// sent by the browser (report-uri / report-to) so they can be inspected from
// the SPA and from `docker compose logs backend`.
package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

const maxReports = 500

type report struct {
	ReceivedAt  time.Time       `json:"receivedAt"`
	ContentType string          `json:"contentType"`
	UserAgent   string          `json:"userAgent"`
	Body        json.RawMessage `json:"body"`
}

type reportStore struct {
	mu      sync.Mutex
	reports []report
}

func (s *reportStore) add(r report) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.reports = append(s.reports, r)
	if len(s.reports) > maxReports {
		s.reports = s.reports[len(s.reports)-maxReports:]
	}
}

func (s *reportStore) list() []report {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]report, len(s.reports))
	copy(out, s.reports)
	return out
}

func (s *reportStore) clear() {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.reports = nil
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func main() {
	addr := os.Getenv("LISTEN_ADDR")
	if addr == "" {
		addr = ":8080"
	}
	store := &reportStore{}
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{"ok": true, "time": time.Now().UTC()})
	})

	// Untrusted HTML "from the backend". The SPA must route this through a
	// Trusted Types policy before handing it to dangerouslySetInnerHTML.
	mux.HandleFunc("GET /api/html", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{
			"html": `<p class="from-backend">Hello from the <strong>Go backend</strong> ` +
				`<img src="x" onerror="window.__ttEvalBackendXss = true" alt="xss-probe"></p>`,
			"generatedAt": time.Now().UTC(),
		})
	})

	// A script whose execution can be observed from the page.
	mux.HandleFunc("GET /api/script.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/javascript; charset=utf-8")
		w.Header().Set("Cache-Control", "no-store")
		_, _ = io.WriteString(w, "window.__ttEvalScriptLoaded = (window.__ttEvalScriptLoaded || 0) + 1;\n"+
			"document.dispatchEvent(new CustomEvent('tt-eval-script-loaded'));\n")
	})

	// CSP violation reports. Accepts the legacy report-uri format
	// (application/csp-report, one object) and the Reporting API format
	// (application/reports+json, an array of reports).
	mux.HandleFunc("POST /api/csp-report", func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(io.LimitReader(r.Body, 1<<20))
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		raw := json.RawMessage(body)
		if !json.Valid(body) {
			raw, _ = json.Marshal(string(body))
		}
		rep := report{
			ReceivedAt:  time.Now().UTC(),
			ContentType: r.Header.Get("Content-Type"),
			UserAgent:   r.Header.Get("User-Agent"),
			Body:        raw,
		}
		store.add(rep)
		log.Printf("csp-report (%s): %s", rep.ContentType, compact(body))
		w.WriteHeader(http.StatusNoContent)
	})

	mux.HandleFunc("GET /api/reports", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, store.list())
	})
	mux.HandleFunc("DELETE /api/reports", func(w http.ResponseWriter, r *http.Request) {
		store.clear()
		w.WriteHeader(http.StatusNoContent)
	})

	log.Printf("backend listening on %s", addr)
	srv := &http.Server{
		Addr:              addr,
		Handler:           logRequests(mux),
		ReadHeaderTimeout: 5 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}

func compact(b []byte) string {
	s := strings.Join(strings.Fields(string(b)), " ")
	if len(s) > 2000 {
		return s[:2000] + "…"
	}
	return s
}

func logRequests(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s (%s)", r.Method, r.URL.Path, time.Since(start).Round(time.Millisecond))
	})
}
