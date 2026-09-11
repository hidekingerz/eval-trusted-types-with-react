// WebMCP integration: exposes the evaluation page as a set of tools that a
// browser agent can discover and call.
//
// The API is still an incubating draft (W3C Web Machine Learning CG) and its
// surface moved during 2026 from `navigator.modelContext` to
// `document.modelContext`, so this module feature-detects both.
//
//   document.modelContext.registerTool(tool, { signal })   // current draft
//   navigator.modelContext.registerTool(tool)              // Chrome 146+ early preview
//   navigator.modelContext.unregisterTool(name)            // early preview only
//
// Tool results follow the MCP-style { content: [{ type: 'text', text }] } shape,
// which both revisions accept ("execute returns any").
//
// WebMCP needs a secure context: https:// or http://localhost.

import { allCases, type CaseResult } from './cases';
import { envStore, type Environment } from './env';
import { buildUrl, type Options } from './options';
import { policyState } from './policy';
import { runCases, runStore } from './runner';
import { createStore } from './store';
import { violations } from './violations';

interface ToolDefinition {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean; consequentialHint?: boolean; untrustedContentHint?: boolean };
  execute: (input: Record<string, unknown>, options?: { signal?: AbortSignal }) => Promise<unknown> | unknown;
}

interface ModelContextLike {
  registerTool: (tool: ToolDefinition, options?: { signal?: AbortSignal }) => Promise<void> | void;
  unregisterTool?: (name: string) => Promise<void> | void;
  provideContext?: (ctx: { tools: ToolDefinition[] }) => Promise<void> | void;
}

export interface WebMcpStatus {
  available: boolean;
  secureContext: boolean;
  surface: 'document.modelContext' | 'navigator.modelContext' | null;
  registered: string[];
  errors: string[];
}

export const webMcpStore = createStore<WebMcpStatus>({
  available: false,
  secureContext: window.isSecureContext,
  surface: null,
  registered: [],
  errors: [],
});

function detect(): { mc: ModelContextLike | null; surface: WebMcpStatus['surface'] } {
  const d = (document as unknown as { modelContext?: ModelContextLike }).modelContext;
  if (d && typeof d.registerTool === 'function') return { mc: d, surface: 'document.modelContext' };
  const n = (navigator as unknown as { modelContext?: ModelContextLike }).modelContext;
  if (n && typeof n.registerTool === 'function') return { mc: n, surface: 'navigator.modelContext' };
  return { mc: null, surface: null };
}

const text = (value: unknown) => ({
  content: [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value, null, 2) }],
});

function serialisePolicy() {
  return {
    supported: policyState.supported,
    policyName: policyState.policyName,
    appPolicyCreated: policyState.appPolicy !== null,
    appPolicyError: policyState.appPolicyError,
    defaultRequested: policyState.defaultRequested,
    defaultPolicyCreated: policyState.defaultPolicy !== null,
    defaultPolicyError: policyState.defaultPolicyError,
    duplicateRequested: policyState.duplicateRequested,
    duplicateResult: policyState.duplicateResult,
    defaultCalls: policyState.defaultCalls.length,
  };
}

function summary(results: CaseResult[]) {
  return results.map((r) => ({
    id: r.id,
    kind: r.kind,
    outcome: r.outcome,
    detail: r.detail,
    error: r.error,
    violations: r.violations.map((v) => `${v.disposition}:${v.effectiveDirective}`),
    defaultPolicyCalls: r.defaultCalls.map((d) => `${d.method}(${d.args.join(', ')})`),
  }));
}

export function buildTools(): ToolDefinition[] {
  const env = (): Environment => envStore.get();
  return [
    {
      name: 'get_environment',
      description:
        'Describe the current evaluation page: React version, CSP scenario, the Content-Security-Policy headers Apache sent, Trusted Types support and the state of the Trusted Types policies the app created.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => {
        const e = env();
        return text({
          reactVersion: e.reactVersion,
          build: e.version,
          scenario: e.scenario,
          url: window.location.href,
          options: e.options,
          contentSecurityPolicy: e.csp,
          contentSecurityPolicyReportOnly: e.cspReportOnly,
          trustedTypesSupported: e.trustedTypesSupported,
          policy: serialisePolicy(),
        });
      },
    },
    {
      name: 'list_scenarios',
      description: 'List the CSP scenarios and React builds served by the Apache proxy, with the URL of each combination.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => {
        const e = env();
        return text({
          versions: e.versions,
          scenarios: e.scenarios.map((s) => ({
            ...s,
            urls: Object.fromEntries(e.versions.map((v) => [v, new URL(buildUrl({ version: v, scenario: s.id }, e.options), window.location.origin).toString()])),
          })),
        });
      },
    },
    {
      name: 'list_cases',
      description: 'List the test cases (id, kind, title, description) the page can run.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => text(allCases.map((c) => ({ id: c.id, kind: c.kind, title: c.title, description: c.description, needsPolicy: !!c.needsPolicy }))),
    },
    {
      name: 'run_tests',
      description:
        'Run the Trusted Types test cases in this page (all of them, or only the given ids) and return each case outcome: injected, blocked, error or skipped, plus CSP violations attributed to it.',
      inputSchema: {
        type: 'object',
        properties: {
          ids: { type: 'array', items: { type: 'string' }, description: 'Optional subset of case ids (see list_cases).' },
        },
      },
      execute: async (input) => {
        const ids = Array.isArray(input?.ids) ? (input.ids as unknown[]).map(String) : undefined;
        const results = await runCases(ids);
        return text({ reactVersion: env().reactVersion, scenario: env().scenario, results: summary(results) });
      },
    },
    {
      name: 'get_results',
      description: 'Return the results of the most recent test run without running anything.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => {
        const s = runStore.get();
        return text({ running: s.running, completedRuns: s.completedRuns, results: summary(s.results) });
      },
    },
    {
      name: 'get_violations',
      description: 'Return every securitypolicyviolation event the page observed since it loaded (enforced and report-only).',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => text(violations.all()),
    },
    {
      name: 'get_server_reports',
      description: 'Fetch the CSP violation reports the Go backend received via report-uri (GET /api/reports).',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => text(await fetch('/api/reports', { cache: 'no-store' }).then((r) => r.json())),
    },
    {
      name: 'clear_server_reports',
      description: 'Delete the CSP violation reports stored by the Go backend (DELETE /api/reports).',
      inputSchema: { type: 'object', properties: {} },
      annotations: { consequentialHint: true },
      execute: async () => {
        const r = await fetch('/api/reports', { method: 'DELETE' });
        return text({ ok: r.ok, status: r.status });
      },
    },
    {
      name: 'navigate',
      description:
        'Navigate this page to another React build / CSP scenario / option set. The page reloads, so call get_environment again afterwards. Options: policy (policy name), createDefault ("off" | "sanitize" | "passthrough": also create the "default" policy), duplicate (create the policy twice), autorun.',
      inputSchema: {
        type: 'object',
        properties: {
          version: { type: 'string', description: 'React build directory, e.g. "19.3" or "19.2".' },
          scenario: { type: 'string', description: 'Scenario id from list_scenarios.' },
          policy: { type: 'string' },
          createDefault: { type: 'string', enum: ['off', 'sanitize', 'passthrough'] },
          duplicate: { type: 'boolean' },
          autorun: { type: 'boolean' },
        },
      },
      annotations: { consequentialHint: true },
      execute: (input) => {
        const e = env();
        const opts: Partial<Options> = {
          policyName: typeof input.policy === 'string' ? input.policy : e.options.policyName,
          createDefault: input.createDefault === 'off' || input.createDefault === 'sanitize' || input.createDefault === 'passthrough' ? input.createDefault : e.options.createDefault,
          duplicate: typeof input.duplicate === 'boolean' ? input.duplicate : e.options.duplicate,
          autorun: typeof input.autorun === 'boolean' ? input.autorun : e.options.autorun,
        };
        const url = buildUrl(
          { version: typeof input.version === 'string' ? input.version : e.version, scenario: typeof input.scenario === 'string' ? input.scenario : e.scenario },
          opts,
        );
        setTimeout(() => window.location.assign(url), 0);
        return text({ navigatingTo: new URL(url, window.location.origin).toString() });
      },
    },
  ];
}

export async function registerWebMcpTools(): Promise<WebMcpStatus> {
  const { mc, surface } = detect();
  const status: WebMcpStatus = {
    available: mc !== null,
    secureContext: window.isSecureContext,
    surface,
    registered: [],
    errors: [],
  };
  if (!mc) {
    status.errors.push(
      window.isSecureContext
        ? 'modelContext not found: enable chrome://flags/#enable-webmcp-testing (Chrome 146+ early preview) or a browser that ships WebMCP.'
        : 'not a secure context: WebMCP needs https:// or http://localhost.',
    );
    webMcpStore.set(status);
    return status;
  }
  const controller = new AbortController();
  window.addEventListener('pagehide', () => controller.abort(), { once: true });
  for (const tool of buildTools()) {
    try {
      await mc.registerTool(tool, { signal: controller.signal });
      status.registered.push(tool.name);
    } catch (e) {
      status.errors.push(`${tool.name}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  webMcpStore.set({ ...status });
  return status;
}
