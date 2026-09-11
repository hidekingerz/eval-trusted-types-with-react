// Runs the cases one after another. React cases are rendered into their own
// React root (inside an error boundary) so that a commit-phase exception
// such as the TypeError the browser throws for a rejected sink is captured
// and attributed to exactly one case.

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { allCases, type Case, type CaseResult, type Outcome, type Verification } from './cases';
import { policyState } from './policy';
import { violations } from './violations';
import { createStore } from './store';

export interface RunState {
  running: boolean;
  current: string | null;
  results: CaseResult[];
  completedRuns: number;
}

export const runStore = createStore<RunState>({ running: false, current: null, results: [], completedRuns: 0 });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

class Boundary extends Component<{ onError: (e: unknown) => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    this.props.onError(error);
  }
  render() {
    return this.state.failed ? <span className="boundary-fallback">⛔ error boundary</span> : this.props.children;
  }
}

function errorText(e: unknown): string {
  if (e instanceof Error) return `${e.name}: ${e.message}`;
  return String(e);
}

function hostElement(): HTMLElement {
  let host = document.getElementById('case-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'case-host';
    document.body.appendChild(host);
  }
  return host;
}

function newContainer(c: Case): HTMLElement {
  const host = hostElement();
  const wrap = document.createElement('div');
  wrap.className = 'case-container';
  wrap.dataset.caseId = c.id;
  const label = document.createElement('div');
  label.className = 'case-label';
  label.textContent = c.id;
  const box = document.createElement('div');
  box.className = 'case-box';
  wrap.append(label, box);
  host.appendChild(wrap);
  return box;
}

async function runOne(c: Case): Promise<CaseResult> {
  const started = performance.now();
  const base: Omit<CaseResult, 'outcome' | 'detail' | 'error' | 'violations' | 'defaultCalls' | 'durationMs'> = {
    id: c.id,
    kind: c.kind,
    title: c.title,
  };
  const finish = (outcome: Outcome, detail: string, error: string | null): CaseResult => ({
    ...base,
    outcome,
    detail,
    error,
    violations: violations.since(started),
    defaultCalls: policyState.defaultCalls.filter((d) => d.at >= started),
    durationMs: Math.round(performance.now() - started),
  });

  if (c.needsPolicy && !policyState.appPolicy) {
    return finish('skipped', `app policy not available (${policyState.appPolicyError ?? 'unknown'})`, null);
  }

  const container = newContainer(c);
  let caught: unknown = undefined;
  let verification: Verification;

  try {
    if (c.kind === 'dom') {
      verification = await c.run(container);
    } else {
      const root = createRoot(container);
      const Comp = c.Component;
      root.render(
        <Boundary onError={(e) => (caught = e)}>
          <Comp />
        </Boundary>,
      );
      await sleep(c.settleMs ?? 300);
      verification = caught === undefined ? await c.verify(container) : { ok: false, detail: 'render failed' };
      // Keep the DOM for inspection; only the React root is released.
      // (unmounting also drops hoisted <script> resources)
      root.unmount();
    }
  } catch (e) {
    caught = e;
    verification = { ok: false, detail: 'threw' };
  }
  // Give the browser a tick to dispatch securitypolicyviolation events.
  await sleep(30);

  if (caught !== undefined) return finish('error', verification.detail, errorText(caught));
  return finish(verification.ok ? 'injected' : 'blocked', verification.detail, null);
}

let queue: Promise<CaseResult[]> = Promise.resolve([]);

/** Run all cases (or a subset by id). Concurrent calls are serialised. */
export function runCases(ids?: string[]): Promise<CaseResult[]> {
  const selected = ids?.length ? allCases.filter((c) => ids.includes(c.id)) : allCases;
  const job = async () => {
    hostElement().replaceChildren();
    runStore.set((s) => ({ ...s, running: true, current: null, results: [] }));
    const results: CaseResult[] = [];
    for (const c of selected) {
      runStore.set((s) => ({ ...s, current: c.id }));
      const r = await runOne(c);
      results.push(r);
      runStore.set((s) => ({ ...s, results: [...results] }));
    }
    runStore.set((s) => ({ ...s, running: false, current: null, completedRuns: s.completedRuns + 1 }));
    return results;
  };
  queue = queue.then(job, job);
  return queue;
}
