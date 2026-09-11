// Trusted Types policy setup. Runs before React mounts so that any sink React
// itself touches during mount is covered by the (optional) default policy.
//
// The "sanitisers" below are deliberately naive: the point of this project is
// to observe how React hands values to DOM sinks, not to ship a sanitiser.
// Real applications should use e.g. DOMPurify with RETURN_TRUSTED_TYPE.

import { readOptions } from './options';

export interface DefaultPolicyCall {
  at: number;
  method: 'createHTML' | 'createScript' | 'createScriptURL';
  /** Extra arguments the browser passes to default-policy callbacks (sink type / sink name). */
  args: string[];
  sample: string;
}

export interface PolicyState {
  supported: boolean;
  policyName: string;
  appPolicy: TrustedTypePolicy | null;
  appPolicyError: string | null;
  defaultRequested: 'off' | 'sanitize' | 'passthrough';
  defaultPolicy: TrustedTypePolicy | null;
  defaultPolicyError: string | null;
  duplicateRequested: boolean;
  duplicateResult: string | null;
  defaultCalls: DefaultPolicyCall[];
}

function sanitizeHTML(input: string): string {
  return input
    .replace(/<\/?(script|iframe|object|embed|style)\b[^>]*>/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(href|src)\s*=\s*(["']?)\s*javascript:/gi, '$1=$2blocked:');
}

function checkScriptURL(input: string): string {
  const url = new URL(input, window.location.href);
  if (url.origin !== window.location.origin) {
    throw new TypeError(`script URL rejected by policy: ${input}`);
  }
  return url.toString();
}

function errorText(e: unknown): string {
  return e instanceof Error ? `${e.name}: ${e.message}` : String(e);
}

function create(): PolicyState {
  const opts = readOptions();
  const state: PolicyState = {
    supported: typeof window.trustedTypes !== 'undefined',
    policyName: opts.policyName,
    appPolicy: null,
    appPolicyError: null,
    defaultRequested: opts.createDefault,
    defaultPolicy: null,
    defaultPolicyError: null,
    duplicateRequested: opts.duplicate,
    duplicateResult: null,
    defaultCalls: [],
  };
  if (!state.supported) {
    state.appPolicyError = 'window.trustedTypes is not available in this browser';
    return state;
  }
  const tt = window.trustedTypes!;
  const rules: TrustedTypePolicyOptions = {
    createHTML: sanitizeHTML,
    createScript: (s: string) => s,
    createScriptURL: checkScriptURL,
  };

  try {
    state.appPolicy = tt.createPolicy(opts.policyName, rules);
  } catch (e) {
    state.appPolicyError = errorText(e);
  }

  if (opts.duplicate) {
    try {
      tt.createPolicy(opts.policyName, rules);
      state.duplicateResult = 'second createPolicy() succeeded';
    } catch (e) {
      state.duplicateResult = errorText(e);
    }
  }

  if (opts.createDefault !== 'off') {
    const html = opts.createDefault === 'sanitize' ? sanitizeHTML : (s: string) => s;
    const record = (method: DefaultPolicyCall['method']) => (input: string, ...rest: unknown[]) => {
      state.defaultCalls.push({
        at: performance.now(),
        method,
        args: rest.map((x) => String(x)),
        sample: input.length > 80 ? input.slice(0, 80) + '…' : input,
      });
      return input;
    };
    try {
      state.defaultPolicy = tt.createPolicy('default', {
        createHTML: (s, ...rest) => html(record('createHTML')(s, ...rest)),
        createScript: record('createScript'),
        createScriptURL: (s, ...rest) => checkScriptURL(record('createScriptURL')(s, ...rest)),
      });
    } catch (e) {
      state.defaultPolicyError = errorText(e);
    }
  }
  return state;
}

export const policyState: PolicyState = create();

/** Returns the app policy or throws a descriptive error. */
export function requirePolicy(): TrustedTypePolicy {
  if (!policyState.appPolicy) {
    throw new Error(`app policy unavailable: ${policyState.appPolicyError ?? 'unknown reason'}`);
  }
  return policyState.appPolicy;
}
