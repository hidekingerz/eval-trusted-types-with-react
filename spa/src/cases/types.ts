import type { ComponentType } from 'react';
import type { ViolationRecord } from '../violations';
import type { DefaultPolicyCall } from '../policy';

/**
 * Outcome of one case.
 *  - injected : the value reached the sink and had the expected effect
 *  - blocked  : no error was thrown but the effect did not happen
 *  - error    : an exception surfaced (React error boundary or try/catch)
 *  - skipped  : the case could not run (e.g. the app policy was not created)
 */
export type Outcome = 'injected' | 'blocked' | 'error' | 'skipped';

export interface Verification {
  ok: boolean;
  detail: string;
}

interface CaseBase {
  id: string;
  title: string;
  /** What the case does and which Trusted Types sink it exercises. */
  description: string;
  /** Requires the app policy to exist. */
  needsPolicy?: boolean;
  /** Milliseconds to wait after mount/run before verifying. */
  settleMs?: number;
}

/** A case that goes through React (render + commit). */
export interface ReactCase extends CaseBase {
  kind: 'react';
  Component: ComponentType;
  verify: (container: HTMLElement) => Promise<Verification> | Verification;
}

/** A control case that talks to the DOM directly, bypassing React. */
export interface DomCase extends CaseBase {
  kind: 'dom';
  run: (container: HTMLElement) => Promise<Verification>;
}

export type Case = ReactCase | DomCase;

export interface CaseResult {
  id: string;
  kind: Case['kind'];
  title: string;
  outcome: Outcome;
  detail: string;
  error: string | null;
  violations: ViolationRecord[];
  defaultCalls: DefaultPolicyCall[];
  durationMs: number;
}
