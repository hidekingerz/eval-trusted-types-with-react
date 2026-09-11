// Order matters: the violation listener and the Trusted Types policies must
// exist before react-dom touches the DOM.
import './violations';
import './policy';
import './styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { envStore, loadEnvironment } from './env';
import { readOptions } from './options';
import { policyState } from './policy';
import { runCases, runStore } from './runner';
import { violations } from './violations';
import { registerWebMcpTools } from './webmcp';

declare global {
  interface Window {
    /** Automation hook used by e2e/run.mjs. */
    __ttEval: {
      done: boolean;
      run: (ids?: string[]) => Promise<unknown>;
      snapshot: () => unknown;
    };
  }
}

const mountStarted = performance.now();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

window.__ttEval = {
  done: false,
  run: (ids) => runCases(ids),
  snapshot: () => ({
    env: envStore.get(),
    policy: {
      supported: policyState.supported,
      policyName: policyState.policyName,
      appPolicyCreated: policyState.appPolicy !== null,
      appPolicyError: policyState.appPolicyError,
      defaultRequested: policyState.defaultRequested,
      defaultPolicyCreated: policyState.defaultPolicy !== null,
      defaultPolicyError: policyState.defaultPolicyError,
      duplicateRequested: policyState.duplicateRequested,
      duplicateResult: policyState.duplicateResult,
    },
    mountViolations: violations.all().filter((v) => v.at < mountStarted + 50),
    violations: violations.all(),
    results: runStore.get().results,
    webmcp: null as unknown,
  }),
};

void (async () => {
  await loadEnvironment();
  const webmcp = await registerWebMcpTools();
  const snap = window.__ttEval.snapshot;
  window.__ttEval.snapshot = () => ({ ...(snap() as object), webmcp });
  if (readOptions().autorun) await runCases();
  window.__ttEval.done = true;
  document.documentElement.dataset.ttEvalDone = '1';
})();
