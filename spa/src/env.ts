// Facts about the page that do not change during its lifetime: which React
// build is running, which scenario, and the CSP headers Apache attached.
import { version as reactVersion } from 'react';
import { readLocation, readOptions } from './options';
import { policyState } from './policy';
import { createStore } from './store';

export interface ScenarioInfo {
  id: string;
  description: string;
}

export interface Environment {
  reactVersion: string;
  version: string;
  scenario: string;
  options: ReturnType<typeof readOptions>;
  csp: string | null;
  cspReportOnly: string | null;
  headersLoaded: boolean;
  trustedTypesSupported: boolean;
  scenarios: ScenarioInfo[];
  versions: string[];
}

export const envStore = createStore<Environment>({
  reactVersion,
  ...readLocation(),
  options: readOptions(),
  csp: null,
  cspReportOnly: null,
  headersLoaded: false,
  trustedTypesSupported: policyState.supported,
  scenarios: [],
  versions: [],
});

export async function loadEnvironment(): Promise<void> {
  const [headers, list] = await Promise.all([
    fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
      .then((r) => ({ csp: r.headers.get('content-security-policy'), cspReportOnly: r.headers.get('content-security-policy-report-only') }))
      .catch(() => ({ csp: null, cspReportOnly: null })),
    fetch('/scenarios.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : { versions: [], scenarios: [] }))
      .catch(() => ({ versions: [], scenarios: [] })) as Promise<{ versions: string[]; scenarios: ScenarioInfo[] }>,
  ]);
  envStore.set((e) => ({ ...e, ...headers, headersLoaded: true, scenarios: list.scenarios ?? [], versions: list.versions ?? [] }));
}
