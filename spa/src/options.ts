// Page-level options. The React version and CSP scenario come from the URL
// path (/<version>/<scenario>/, materialised by proxy/docker-entrypoint.sh);
// behavioural switches come from the query string so that every
// combination has a shareable URL.

export interface Options {
  /** Name of the Trusted Types policy the app creates. */
  policyName: string;
  /**
   * Also create the special `default` policy.
   *  - 'off'         : do not create it
   *  - 'sanitize'    : createHTML runs the same naive sanitiser as the app policy
   *  - 'passthrough' : return the input unchanged (pure instrumentation; unsafe)
   */
  createDefault: DefaultPolicyMode;
  /** Try to create the app policy a second time (for 'allow-duplicates'). */
  duplicate: boolean;
  /** Start the test run automatically after mount. */
  autorun: boolean;
}

export interface Location {
  /** e.g. "19.3" — the build directory under Apache's DocumentRoot. */
  version: string;
  /** e.g. "enforce-named" — the scenario directory. */
  scenario: string;
}

export type DefaultPolicyMode = 'off' | 'sanitize' | 'passthrough';

export const DEFAULT_POLICY_NAME = 'react-eval';

export function readOptions(search = window.location.search): Options {
  const q = new URLSearchParams(search);
  const flag = (name: string, fallback: boolean) => {
    const v = q.get(name);
    if (v === null) return fallback;
    return v === '1' || v === 'true';
  };
  return {
    policyName: q.get('policy') || DEFAULT_POLICY_NAME,
    createDefault: defaultMode(q.get('default')),
    duplicate: flag('dup', false),
    autorun: flag('autorun', true),
  };
}

function defaultMode(v: string | null): DefaultPolicyMode {
  if (v === null || v === '' || v === '0' || v === 'false' || v === 'off') return 'off';
  if (v === 'passthrough') return 'passthrough';
  return 'sanitize'; // '1', 'true', 'sanitize'
}

export function readLocation(pathname = window.location.pathname): Location {
  const parts = pathname.split('/').filter(Boolean);
  return { version: parts[0] ?? '?', scenario: parts[1] ?? '(dev)' };
}

export function buildUrl(loc: Location, opts: Partial<Options>): string {
  const q = new URLSearchParams();
  if (opts.policyName && opts.policyName !== DEFAULT_POLICY_NAME) q.set('policy', opts.policyName);
  if (opts.createDefault && opts.createDefault !== 'off') q.set('default', opts.createDefault);
  if (opts.duplicate) q.set('dup', '1');
  if (opts.autorun === false) q.set('autorun', '0');
  const qs = q.toString();
  return `/${loc.version}/${loc.scenario}/${qs ? '?' + qs : ''}`;
}
