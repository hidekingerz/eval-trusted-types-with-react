# Results

Generated 2026-09-11T00:32:33.724Z against `http://127.0.0.1:8090 (Apache 2.4 + Go backend, same config as docker compose)` with Chromium 141.0.7390.37 (Playwright headless).

Legend: ✅ injected = value reached the sink and took effect · 🚫 blocked = no error, no effect · 💥 error = exception (browser TypeError surfaced through React) · ⏭ skipped = app policy unavailable. A suffix such as `(e)` / `(r)` counts enforced / report-only `securitypolicyviolation` events attributed to the case.

## Scenario `none`

No CSP at all. Baseline: every sink accepts plain strings.

- `Content-Security-Policy`: `(none)`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `second createPolicy() succeeded` | `second createPolicy() succeeded` |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `report-only`

Report-Only enforcement: violations are reported but nothing is blocked.

- `Content-Security-Policy`: `(none)`
- `Content-Security-Policy-Report-Only`: `require-trusted-types-for 'script'; report-uri /api/csp-report`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected (r) | ✅ injected (r) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected (r) | ✅ injected (r) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected (rr) | ✅ injected (rr) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected (rr) | ✅ injected (rr) |
| `react-script-src-trusted` | ✅ injected (rr) | ✅ injected (r) |
| `react-script-async-src-string` | ✅ injected (r) | ✅ injected (r) |
| `react-script-async-src-trusted` | 🚫 blocked (rr) | 🚫 blocked (r) |
| `react-iframe-srcdoc-string` | ✅ injected (r) | ✅ injected (r) |
| `react-iframe-srcdoc-trusted` | ✅ injected (r) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-eval-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-setattribute-onclick-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-script-src-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `second createPolicy() succeeded` | `second createPolicy() succeeded` |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected (r) | ✅ injected (r) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected (r) | ✅ injected (r) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected (rr) | ✅ injected (rr) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected (rr) | ✅ injected (rr) |
| `react-script-src-trusted` | ✅ injected (rr) | ✅ injected (r) |
| `react-script-async-src-string` | ✅ injected (r) | ✅ injected (r) |
| `react-script-async-src-trusted` | 🚫 blocked (rr) | 🚫 blocked (r) |
| `react-iframe-srcdoc-string` | ✅ injected (r) | ✅ injected (r) |
| `react-iframe-srcdoc-trusted` | ✅ injected (r) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-eval-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-setattribute-onclick-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-script-src-string` | ✅ injected (r) | ✅ injected (r) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce`

Enforce sinks only. Any policy name may be created (no trusted-types directive).

- `Content-Security-Policy`: `require-trusted-types-for 'script'; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `second createPolicy() succeeded` | `second createPolicy() succeeded` |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce-named`

Enforce sinks and restrict policy names to 'react-eval' and 'default'.

- `Content-Security-Policy`: `require-trusted-types-for 'script'; trusted-types react-eval default; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce-named-no-default`

Enforce sinks; only 'react-eval' may be created. Creating a default policy is a violation.

- `Content-Security-Policy`: `require-trusted-types-for 'script'; trusted-types react-eval; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce-allow-duplicates`

Enforce sinks; 'react-eval'/'default' allowed and may be created more than once ('allow-duplicates').

- `Content-Security-Policy`: `require-trusted-types-for 'script'; trusted-types react-eval default 'allow-duplicates'; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `second createPolicy() succeeded` | `second createPolicy() succeeded` |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce-no-policies`

Enforce sinks and forbid creating any policy (trusted-types 'none'). Nothing string-based can reach a sink.

- `Content-Security-Policy`: `require-trusted-types-for 'script'; trusted-types 'none'; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ⏭ skipped | ⏭ skipped |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | ⏭ skipped | ⏭ skipped |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ⏭ skipped | ⏭ skipped |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. |
| default policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. |
| violations during React mount | 2 | 2 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ⏭ skipped | ⏭ skipped |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | ⏭ skipped | ⏭ skipped |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ⏭ skipped | ⏭ skipped |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. |
| default policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "default" disallowed. |
| violations during React mount | 2 | 2 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ⏭ skipped | ⏭ skipped |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | ⏭ skipped | ⏭ skipped |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ⏭ skipped | ⏭ skipped |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. | ❌ TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed. |
| duplicate createPolicy() | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.` | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.` |
| violations during React mount | 2 | 2 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ⏭ skipped | ⏭ skipped |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | ⏭ skipped | ⏭ skipped |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | ⏭ skipped | ⏭ skipped |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | ⏭ skipped | ⏭ skipped |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ⏭ skipped | ⏭ skipped |

## Scenario `enforce-strict`

Realistic hardened CSP: Trusted Types plus script-src 'self', object-src 'none', base-uri 'none'.

- `Content-Security-Policy`: `require-trusted-types-for 'script'; trusted-types react-eval default; script-src 'self'; object-src 'none'; base-uri 'none'; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | 💥 error (e) | 💥 error (e) |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | 💥 error (e) | 💥 error (e) |
| `dom-settimeout-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `dom-setattribute-onclick-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected (e) | ✅ injected (e) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | 💥 error (e) | 💥 error (e) |
| `dom-settimeout-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `dom-setattribute-onclick-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (ee) | 💥 error (ee) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (ee) | 💥 error (ee) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (ee) | 💥 error (ee) |
| `react-script-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-script-async-src-string` | 🚫 blocked (e) | 🚫 blocked (e) |
| `react-script-async-src-trusted` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-string` | 💥 error (ee) | 💥 error (ee) |
| `react-iframe-srcdoc-trusted` | 💥 error (ee) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (e) | 💥 error (e) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-string` | 💥 error (e) | 💥 error (e) |
| `dom-eval-trusted` | 💥 error (e) | 💥 error (e) |
| `dom-settimeout-string` | 💥 error (e) | 💥 error (e) |
| `dom-setattribute-onclick-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-string` | 💥 error (e) | 💥 error (e) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `enforce-with-report-only`

Enforce sinks, and additionally Report-Only a stricter policy-name allow-list ('react-eval' only).

- `Content-Security-Policy`: `require-trusted-types-for 'script'; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `require-trusted-types-for 'script'; trusted-types react-eval; report-uri /api/csp-report`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | 💥 error (erer) | 💥 error (erer) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (erer) | 💥 error (erer) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (erer) | 💥 error (erer) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (erer) | 💥 error (erer) |
| `react-script-src-trusted` | 💥 error (erer) | 💥 error (erer) |
| `react-script-async-src-string` | 🚫 blocked (er) | 🚫 blocked (er) |
| `react-script-async-src-trusted` | 💥 error (erer) | 💥 error (erer) |
| `react-iframe-srcdoc-string` | 💥 error (erer) | 💥 error (erer) |
| `react-iframe-srcdoc-trusted` | 💥 error (erer) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (er) | 💥 error (er) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (er) | 💥 error (er) |
| `dom-eval-string` | 💥 error (er) | 💥 error (er) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (er) | 💥 error (er) |
| `dom-setattribute-onclick-string` | 💥 error (er) | 💥 error (er) |
| `dom-script-src-string` | 💥 error (er) | 💥 error (er) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error | 💥 error |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error | 💥 error |
| `react-script-src-trusted` | 💥 error | 💥 error |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 💥 error | 💥 error |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `second createPolicy() succeeded` | `second createPolicy() succeeded` |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | 💥 error (erer) | 💥 error (erer) |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | 💥 error (erer) | 💥 error (erer) |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | 💥 error (erer) | 💥 error (erer) |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | 💥 error (erer) | 💥 error (erer) |
| `react-script-src-trusted` | 💥 error (erer) | 💥 error (erer) |
| `react-script-async-src-string` | 🚫 blocked (er) | 🚫 blocked (er) |
| `react-script-async-src-trusted` | 💥 error (erer) | 💥 error (erer) |
| `react-iframe-srcdoc-string` | 💥 error (erer) | 💥 error (erer) |
| `react-iframe-srcdoc-trusted` | 💥 error (erer) | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | 💥 error (er) | 💥 error (er) |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | 💥 error (er) | 💥 error (er) |
| `dom-eval-string` | 💥 error (er) | 💥 error (er) |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | 💥 error (er) | 💥 error (er) |
| `dom-setattribute-onclick-string` | 💥 error (er) | 💥 error (er) |
| `dom-script-src-string` | 💥 error (er) | 💥 error (er) |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Scenario `policy-names-only`

Only the trusted-types directive (policy-name allow-list) without require-trusted-types-for. Sinks still accept strings.

- `Content-Security-Policy`: `trusted-types react-eval default; report-uri /api/csp-report`
- `Content-Security-Policy-Report-Only`: `(none)`

### app policy only (`no query`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + sanitising default policy (`?default=sanitize`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy + pass-through default policy (`?default=passthrough`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| default policy created | ✅ | ✅ |
| violations during React mount | 0 | 0 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

### app policy created twice (`?dup=1`)

| | react-dom 19.2.8 | react-dom 19.3.0 |
|---|---|---|
| app policy created | ✅ | ✅ |
| duplicate createPolicy() | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` | `TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy with name "react-eval" already exists.` |
| violations during React mount | 1 | 1 |
| `react-dsih-string` | ✅ injected | ✅ injected |
| `react-dsih-trusted-html` | ✅ injected | ✅ injected |
| `react-dsih-backend-string` | ✅ injected | ✅ injected |
| `react-dsih-backend-trusted` | ✅ injected | ✅ injected |
| `react-script-inline` | ✅ injected | ✅ injected |
| `react-script-text-trusted` | 💥 error | 💥 error |
| `react-script-src-string` | ✅ injected | ✅ injected |
| `react-script-src-trusted` | ✅ injected | ✅ injected |
| `react-script-async-src-string` | ✅ injected | ✅ injected |
| `react-script-async-src-trusted` | 🚫 blocked | 🚫 blocked |
| `react-iframe-srcdoc-string` | ✅ injected | ✅ injected |
| `react-iframe-srcdoc-trusted` | ✅ injected | ✅ injected |
| `react-a-href-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-string` | ✅ injected | ✅ injected |
| `dom-innerhtml-trusted` | ✅ injected | ✅ injected |
| `dom-domparser-string` | ✅ injected | ✅ injected |
| `dom-eval-string` | ✅ injected | ✅ injected |
| `dom-eval-trusted` | ✅ injected | ✅ injected |
| `dom-settimeout-string` | ✅ injected | ✅ injected |
| `dom-setattribute-onclick-string` | ✅ injected | ✅ injected |
| `dom-script-src-string` | ✅ injected | ✅ injected |
| `dom-script-src-trusted` | ✅ injected | ✅ injected |

## Details

<details><summary><code>19.2</code> / <code>none</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>none</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>none</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>none</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>none</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>none</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>none</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>none</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>report-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  | report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  | report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  | report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  | report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  | report:require-trusted-types-for |  |
| `dom-eval-string` | injected | eval(string) executed |  | report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  | report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  | report:require-trusted-types-for |  |
| `dom-script-src-string` | injected | script loaded and executed |  | report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>report-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  | report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  | report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  | report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  | report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  | report:require-trusted-types-for |  |
| `dom-eval-string` | injected | eval(string) executed |  | report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  | report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  | report:require-trusted-types-for |  |
| `dom-script-src-string` | injected | script loaded and executed |  | report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>report-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
```

</details>

<details><summary><code>19.3</code> / <code>report-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
```

</details>

<details><summary><code>19.2</code> / <code>report-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>report-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>report-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  | report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  | report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  | report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  | report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  | report:require-trusted-types-for |  |
| `dom-eval-string` | injected | eval(string) executed |  | report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  | report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  | report:require-trusted-types-for |  |
| `dom-script-src-string` | injected | script loaded and executed |  | report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>report-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  | report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  | report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  | report:require-trusted-types-for |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  | report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  | report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  | report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  | report:require-trusted-types-for |  |
| `dom-eval-string` | injected | eval(string) executed |  | report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  | report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  | report:require-trusted-types-for |  |
| `dom-script-src-string` | injected | script loaded and executed |  | report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>enforce</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
```

</details>

<details><summary><code>19.3</code> / <code>enforce</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
```

</details>

<details><summary><code>19.2</code> / <code>enforce</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>enforce</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>enforce</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named-no-default</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named-no-default</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named-no-default</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named-no-default</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named-no-default</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named-no-default</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-named-no-default</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-named-no-default</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-allow-duplicates</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-allow-duplicates</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-allow-duplicates</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
```

</details>

<details><summary><code>19.3</code> / <code>enforce-allow-duplicates</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
```

</details>

<details><summary><code>19.2</code> / <code>enforce-allow-duplicates</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>enforce-allow-duplicates</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>enforce-allow-duplicates</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-allow-duplicates</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-no-policies</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-no-policies</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-no-policies</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-no-policies</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-no-policies</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-no-policies</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'default' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-no-policies</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-no-policies</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | skipped | app policy not available (TypeError: Failed to execute 'createPolicy' on 'TrustedTypePolicyFactory': Policy "react-eval" disallowed.) |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
Refused to create a TrustedTypePolicy named 'react-eval' because it violates the following Content Security Policy directive: "trusted-types 'none'".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-strict</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-strict</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-strict</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | blocked | setTimeout(string) did not execute |  | enforce:script-src | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | blocked | onclick attribute did not execute |  | enforce:script-src-attr | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

```

</details>

<details><summary><code>19.3</code> / <code>enforce-strict</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | blocked | setTimeout(string) did not execute |  | enforce:script-src | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | blocked | onclick attribute did not execute |  | enforce:script-src-attr | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

```

</details>

<details><summary><code>19.2</code> / <code>enforce-strict</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  | enforce:script-src-attr | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | blocked | setTimeout(string) did not execute |  | enforce:script-src | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | blocked | onclick attribute did not execute |  | enforce:script-src-attr | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

```

</details>

<details><summary><code>19.3</code> / <code>enforce-strict</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  | enforce:script-src-attr | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | blocked | setTimeout(string) did not execute |  | enforce:script-src | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | blocked | onclick attribute did not execute |  | enforce:script-src-attr | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

```

</details>

<details><summary><code>19.2</code> / <code>enforce-strict</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-strict</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, enforce:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:require-trusted-types-for |  |
| `dom-eval-trusted` | error | threw | EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".  | enforce:script-src |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-with-report-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-with-report-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>enforce-with-report-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86034)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:114598)
    at Ou (http://12
```

</details>

<details><summary><code>19.3</code> / <code>enforce-with-report-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. |  | createHTML(TrustedHTML,Element innerHTML), createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88946)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:126980)
    at qd (http://12
```

</details>

<details><summary><code>19.2</code> / <code>enforce-with-report-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>enforce-with-report-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  | createHTML(TrustedHTML,Element innerHTML), createScript(TrustedScript,HTMLScriptElement textContent) |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML), createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  | createScriptURL(TrustedScriptURL,Element setAttribute) |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  | createHTML(TrustedHTML,Element setAttribute) |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  | createHTML(TrustedHTML,Element innerHTML) |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  | createHTML(TrustedHTML,DOMParser parseFromString) |
| `dom-eval-string` | injected | eval(string) executed |  |  | createScript(TrustedScript,eval) |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  | createScript(TrustedScript,Window setTimeout) |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  | createScript(TrustedScript,Element setAttribute) |
| `dom-script-src-string` | injected | script loaded and executed |  |  | createScriptURL(TrustedScriptURL,HTMLScriptElement src) |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>enforce-with-report-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:1788)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86008)
    at Fu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:116303)
    at Mu (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:115576)
    at ku (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:1145
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at It (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:5627)
    at $ (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:4407)
    at Pd (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:9:7811)
    at Vc (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:86632)
    at Fu
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.3</code> / <code>enforce-with-report-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-string` | blocked | script not hoisted into <head> |  | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-script-async-src-trusted` | error | render failed | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-string` | error | render failed | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for, enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | error | threw | TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | error | threw | TypeError: Failed to execute 'parseFromString' on 'DOMParser': This document requires 'TrustedHTML' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-string` | error | threw | EvalError: Refused to evaluate a string as JavaScript because this document requires 'Trusted Type' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | error | threw | TypeError: Failed to execute 'setTimeout' on 'Window': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-setattribute-onclick-string` | error | threw | TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScript' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-string` | error | threw | TypeError: Failed to set the 'src' property on 'HTMLScriptElement': This document requires 'TrustedScriptURL' assignment. | enforce:require-trusted-types-for, report:require-trusted-types-for |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:1822)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
 
Failed to load resource: the server responded with a status of 404 (Not Found)
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedScriptURL' assignment.
pageerror: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedScriptURL' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:88920)
    at ef (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:128772)
    at Zd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:127958)
    at Jd (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:1269
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
TypeError: Failed to execute 'setAttribute' on 'Element': This document requires 'TrustedHTML' assignment.
    at an (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:5847)
    at $ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:4457)
    at np (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:9:7934)
    at Cl (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:89544)
    at ef
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedHTML' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScript' assignment.
This document requires 'TrustedScriptURL' assignment.
```

</details>

<details><summary><code>19.2</code> / <code>policy-names-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>policy-names-only</code> / app policy only</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>policy-names-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>policy-names-only</code> / app policy + sanitising default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>policy-names-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>policy-names-only</code> / app policy + pass-through default policy</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>

<details><summary><code>19.2</code> / <code>policy-names-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ha (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:37571)
    at b (http://127.0.0.1:8090/19.2/assets/index-ZMtyd7qj.js:8:42832)
    at http://127.0.0.1:8090/19.2/assets/ind
```

</details>

<details><summary><code>19.3</code> / <code>policy-names-only</code> / app policy created twice</summary>

| case | outcome | detail | error | violations | default policy calls |
|---|---|---|---|---|---|
| `react-dsih-string` | injected | probe "string" rendered |  |  |  |
| `react-dsih-trusted-html` | injected | probe "TrustedHTML" rendered |  |  |  |
| `react-dsih-backend-string` | injected | backend HTML rendered; onerror XSS probe FIRED |  |  |  |
| `react-dsih-backend-trusted` | injected | backend HTML rendered; onerror XSS probe did not fire |  |  |  |
| `react-script-inline` | injected | script element created; executed=false |  |  |  |
| `react-script-text-trusted` | error | render failed | Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings. |  |  |
| `react-script-src-string` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-src-trusted` | injected | script element with src created (not executed by design) |  |  |  |
| `react-script-async-src-string` | injected | hoisted into <head>; script executed (load counter 0 → 1) |  |  |  |
| `react-script-async-src-trusted` | blocked | script not hoisted into <head> |  |  |  |
| `react-iframe-srcdoc-string` | injected | srcdoc document rendered |  |  |  |
| `react-iframe-srcdoc-trusted` | injected | srcdoc document rendered |  |  |  |
| `react-a-href-string` | injected | href attribute set |  |  |  |
| `dom-innerhtml-string` | injected | HTML injected |  |  |  |
| `dom-innerhtml-trusted` | injected | HTML injected |  |  |  |
| `dom-domparser-string` | injected | parsed |  |  |  |
| `dom-eval-string` | injected | eval(string) executed |  |  |  |
| `dom-eval-trusted` | injected | eval(TrustedScript) executed |  |  |  |
| `dom-settimeout-string` | injected | setTimeout(string) executed |  |  |  |
| `dom-setattribute-onclick-string` | injected | onclick attribute executed |  |  |  |
| `dom-script-src-string` | injected | script loaded and executed |  |  |  |
| `dom-script-src-trusted` | injected | script loaded and executed |  |  |  |

Console errors:

```
Refused to create a TrustedTypePolicy named 'react-eval' because a policy with that name already exists and the Content Security Policy directive does not 'allow-duplicates': "trusted-types react-eval default".
Failed to load resource: the server responded with a status of 404 (Not Found)
Failed to load resource: the server responded with a status of 404 (Not Found)
Error: Minified React error #31; visit https://react.dev/errors/31?args[]=%5Bobject%20TrustedScript%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at yo (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:39241)
    at _ (http://127.0.0.1:8090/19.3/assets/index-CVhdpAYh.js:8:44583)
    at http://127.0.0.1:8090/19.3/assets/ind
```

</details>
