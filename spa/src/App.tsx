import { useEffect, useState, type FormEvent } from 'react';
import { allCases } from './cases';
import { envStore } from './env';
import { buildUrl, DEFAULT_POLICY_NAME, type DefaultPolicyMode } from './options';
import { policyState } from './policy';
import { runCases, runStore } from './runner';
import { useStore } from './store';
import { violations, type ViolationRecord } from './violations';
import { webMcpStore } from './webmcp';

function Badge({ kind, children }: { kind: string; children: React.ReactNode }) {
  return <span className={`badge ${kind}`}>{children}</span>;
}

function YesNo({ value, label }: { value: boolean | null; label?: [string, string] }) {
  const [y, n] = label ?? ['yes', 'no'];
  if (value === null) return <Badge kind="na">n/a</Badge>;
  return <Badge kind={value ? 'yes' : 'no'}>{value ? y : n}</Badge>;
}

function Header() {
  const env = useStore(envStore);
  return (
    <section className="card">
      <h1>React × Trusted Types evaluation</h1>
      <div className="row muted">
        <span>
          react-dom <code>{env.reactVersion}</code>
        </span>
        <span>
          scenario <code>{env.scenario}</code>
        </span>
        <span>
          trustedTypes API <YesNo value={env.trustedTypesSupported} label={['available', 'missing']} />
        </span>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <span className="muted">React build:</span>
        {env.versions.map((v) => (
          <a key={v} className={`pill ${v === env.version ? 'active' : ''}`} href={buildUrl({ version: v, scenario: env.scenario }, env.options)}>
            {v}
          </a>
        ))}
      </div>
      <div className="row" style={{ marginTop: 6 }}>
        <span className="muted">Scenario:</span>
        {env.scenarios.map((s) => (
          <a
            key={s.id}
            className={`pill ${s.id === env.scenario ? 'active' : ''}`}
            title={s.description}
            href={buildUrl({ version: env.version, scenario: s.id }, env.options)}
          >
            {s.id}
          </a>
        ))}
      </div>
      {env.scenarios.find((s) => s.id === env.scenario) && (
        <p className="muted" style={{ margin: '8px 0 0' }}>
          {env.scenarios.find((s) => s.id === env.scenario)!.description}
        </p>
      )}
    </section>
  );
}

function CspPanel() {
  const env = useStore(envStore);
  return (
    <section className="card">
      <h2>Headers sent by Apache for this document</h2>
      <dl className="kv">
        <dt>Content-Security-Policy</dt>
        <dd>
          <code>{env.headersLoaded ? (env.csp ?? '(none)') : 'loading…'}</code>
        </dd>
        <dt>Content-Security-Policy-Report-Only</dt>
        <dd>
          <code>{env.headersLoaded ? (env.cspReportOnly ?? '(none)') : 'loading…'}</code>
        </dd>
      </dl>
    </section>
  );
}

function PolicyPanel() {
  const p = policyState;
  return (
    <section className="card">
      <h2>Trusted Types policies created by the app (before React mounted)</h2>
      <dl className="kv">
        <dt>
          policy <code>{p.policyName}</code>
        </dt>
        <dd>
          <YesNo value={p.appPolicy !== null} label={['created', 'failed']} /> {p.appPolicyError && <code>{p.appPolicyError}</code>}
        </dd>
        <dt>duplicate createPolicy()</dt>
        <dd>{p.duplicateRequested ? <code>{p.duplicateResult}</code> : <span className="muted">not requested (enable with ?dup=1)</span>}</dd>
        <dt>
          policy <code>default</code>
        </dt>
        <dd>
          {p.defaultRequested !== 'off' ? (
            <>
              <YesNo value={p.defaultPolicy !== null} label={['created', 'failed']} /> <span className="muted">({p.defaultRequested})</span>{' '}
              {p.defaultPolicyError && <code>{p.defaultPolicyError}</code>}
            </>
          ) : (
            <span className="muted">not requested (enable with ?default=sanitize or ?default=passthrough)</span>
          )}
        </dd>
        <dt>trustedTypes.defaultPolicy</dt>
        <dd>
          <code>{String(window.trustedTypes?.defaultPolicy?.name ?? null)}</code>
        </dd>
      </dl>
    </section>
  );
}

function OptionsForm() {
  const env = useStore(envStore);
  const [policyName, setPolicyName] = useState(env.options.policyName);
  const [createDefault, setCreateDefault] = useState<DefaultPolicyMode>(env.options.createDefault);
  const [duplicate, setDuplicate] = useState(env.options.duplicate);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.assign(buildUrl({ version: env.version, scenario: env.scenario }, { policyName, createDefault, duplicate, autorun: env.options.autorun }));
  };
  // The tool* attributes are the declarative WebMCP form annotations; they are
  // ignored by browsers that do not implement WebMCP.
  const declarative = {
    toolname: 'configure_page',
    tooldescription: 'Reload the page with a different Trusted Types policy name and optional default / duplicate policy creation.',
  } as Record<string, string>;
  return (
    <section className="card">
      <h2>Options (reloads the page)</h2>
      <form className="row" onSubmit={onSubmit} {...declarative}>
        <label>
          policy name{' '}
          <input type="text" name="policy" value={policyName} onChange={(e) => setPolicyName(e.target.value)} placeholder={DEFAULT_POLICY_NAME} {...({ toolparamdescription: 'Name of the Trusted Types policy to create' } as Record<string, string>)} />
        </label>
        <label>
          <code>default</code> policy{' '}
          <select name="default" value={createDefault} onChange={(e) => setCreateDefault(e.target.value as DefaultPolicyMode)}>
            <option value="off">off</option>
            <option value="sanitize">create (sanitising createHTML)</option>
            <option value="passthrough">create (pass-through, unsafe)</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="dup" checked={duplicate} onChange={(e) => setDuplicate(e.target.checked)} /> create policy twice
        </label>
        <button type="submit">Apply</button>
      </form>
    </section>
  );
}

function ViolationSummary({ items }: { items: ViolationRecord[] }) {
  if (items.length === 0) return <span className="muted">—</span>;
  return (
    <>
      {items.map((v, i) => (
        <div key={i}>
          <Badge kind={v.disposition === 'enforce' ? 'error' : 'blocked'}>{v.disposition}</Badge> <code>{v.effectiveDirective}</code>
          {v.sample && (
            <>
              {' '}
              <span className="muted">sample:</span> <code>{v.sample}</code>
            </>
          )}
        </div>
      ))}
    </>
  );
}

function Results() {
  const run = useStore(runStore);
  const byId = new Map(run.results.map((r) => [r.id, r]));
  return (
    <section className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>Cases</h2>
        <button className="primary" disabled={run.running} onClick={() => void runCases()}>
          {run.running ? `running ${run.current}…` : run.completedRuns ? 'Run again' : 'Run'}
        </button>
      </div>
      <table style={{ marginTop: 8 }}>
        <thead>
          <tr>
            <th>case</th>
            <th>outcome</th>
            <th>detail</th>
            <th>CSP violations</th>
            <th>default policy calls</th>
          </tr>
        </thead>
        <tbody>
          {allCases.map((c) => {
            const r = byId.get(c.id);
            return (
              <tr key={c.id}>
                <td className="id">
                  <code>{c.id}</code>
                  <div className="muted" style={{ whiteSpace: 'normal', maxWidth: 360 }}>
                    <b>{c.title}</b>
                    <br />
                    {c.description}
                  </div>
                </td>
                <td>{r ? <Badge kind={r.outcome}>{r.outcome}</Badge> : <span className="muted">{run.current === c.id ? '…' : ''}</span>}</td>
                <td>
                  {r?.detail}
                  {r?.error && (
                    <div>
                      <code style={{ color: 'var(--err)' }}>{r.error}</code>
                    </div>
                  )}
                </td>
                <td>{r ? <ViolationSummary items={r.violations} /> : null}</td>
                <td>
                  {r?.defaultCalls.map((d, i) => (
                    <div key={i}>
                      <code>
                        {d.method}({d.args.map((a) => JSON.stringify(a)).join(', ')})
                      </code>
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <details style={{ marginTop: 8 }}>
        <summary className="muted">Sandbox (DOM produced by the cases)</summary>
        <div id="case-host" />
      </details>
    </section>
  );
}

function ViolationLog() {
  const [items, setItems] = useState<readonly ViolationRecord[]>(violations.all());
  useEffect(() => violations.subscribe(() => setItems([...violations.all()])), []);
  const mountViolations = items.filter((v) => v.at < mountedAt);
  return (
    <section className="card">
      <h2>
        securitypolicyviolation events in this page ({items.length}){' '}
        <span className="muted" style={{ fontWeight: 'normal' }}>
          — {mountViolations.length} before/while React mounted
        </span>
      </h2>
      <div className="violation-list">
        {items.length === 0 ? (
          <span className="muted">none</span>
        ) : (
          <table>
            <thead>
              <tr>
                <th>t (ms)</th>
                <th>disposition</th>
                <th>directive</th>
                <th>blocked</th>
                <th>sample</th>
                <th>source</th>
              </tr>
            </thead>
            <tbody>
              {items.map((v, i) => (
                <tr key={i}>
                  <td>{Math.round(v.at)}</td>
                  <td>
                    <Badge kind={v.disposition === 'enforce' ? 'error' : 'blocked'}>{v.disposition}</Badge>
                  </td>
                  <td>
                    <code>{v.effectiveDirective}</code>
                  </td>
                  <td>
                    <code>{v.blockedURI}</code>
                  </td>
                  <td>
                    <code>{v.sample}</code>
                  </td>
                  <td className="muted">
                    {v.sourceFile.split('/').pop()}:{v.lineNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

interface ServerReport {
  receivedAt: string;
  contentType: string;
  body: unknown;
}

function ServerReports() {
  const [reports, setReports] = useState<ServerReport[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const load = () =>
    fetch('/api/reports', { cache: 'no-store' })
      .then((r) => r.json())
      .then((j: ServerReport[]) => {
        setReports(j);
        setError(null);
      })
      .catch((e) => setError(String(e)));
  const clear = () => fetch('/api/reports', { method: 'DELETE' }).then(load);
  const run = useStore(runStore);
  useEffect(() => {
    if (!run.running) {
      const t = setTimeout(load, 500);
      return () => clearTimeout(t);
    }
  }, [run.running, run.completedRuns]);
  return (
    <section className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>
          CSP reports received by the Go backend (<code>report-uri /api/csp-report</code>) {reports ? `(${reports.length})` : ''}
        </h2>
        <span>
          <button onClick={load}>Refresh</button> <button onClick={clear}>Clear</button>
        </span>
      </div>
      {error && <code style={{ color: 'var(--err)' }}>{error}</code>}
      {reports && reports.length === 0 && <p className="muted">none</p>}
      {reports && reports.length > 0 && (
        <div className="violation-list" style={{ marginTop: 8 }}>
          {reports
            .slice()
            .reverse()
            .map((r, i) => (
              <details key={i}>
                <summary>
                  <code>{r.receivedAt}</code> <span className="muted">{r.contentType}</span>{' '}
                  <code>{describeReport(r.body)}</code>
                </summary>
                <pre>{JSON.stringify(r.body, null, 2)}</pre>
              </details>
            ))}
        </div>
      )}
    </section>
  );
}

function describeReport(body: unknown): string {
  const b = body as { 'csp-report'?: Record<string, unknown> } | Array<{ body?: Record<string, unknown> }>;
  const rep = Array.isArray(b) ? b[0]?.body : b?.['csp-report'];
  if (!rep) return '';
  return `${rep.disposition ?? ''} ${rep['effective-directive'] ?? rep.effectiveDirective ?? ''} ${rep['script-sample'] ?? rep.sample ?? ''}`.trim();
}

function WebMcpPanel() {
  const s = useStore(webMcpStore);
  return (
    <section className="card">
      <h2>
        WebMCP <YesNo value={s.available} label={['tools registered', 'not available']} />
      </h2>
      <dl className="kv">
        <dt>secure context</dt>
        <dd>
          <YesNo value={s.secureContext} />
        </dd>
        <dt>API surface</dt>
        <dd>
          <code>{s.surface ?? '—'}</code>
        </dd>
        <dt>tools</dt>
        <dd>{s.registered.length ? s.registered.map((t) => <code key={t}>{t} </code>) : <span className="muted">—</span>}</dd>
        {s.errors.length > 0 && (
          <>
            <dt>notes</dt>
            <dd>
              {s.errors.map((e, i) => (
                <div key={i} className="muted">
                  {e}
                </div>
              ))}
            </dd>
          </>
        )}
      </dl>
    </section>
  );
}

const mountedAt = performance.now();

export default function App() {
  return (
    <main>
      <Header />
      <CspPanel />
      <PolicyPanel />
      <OptionsForm />
      <Results />
      <ViolationLog />
      <ServerReports />
      <WebMcpPanel />
    </main>
  );
}
