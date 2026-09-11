// Collects `securitypolicyviolation` events dispatched by the browser. Both
// enforced ("enforce") and Report-Only ("report") violations fire this event,
// which is what lets the SPA show what *would* have been blocked.

export interface ViolationRecord {
  at: number;
  disposition: 'enforce' | 'report';
  effectiveDirective: string;
  violatedDirective: string;
  blockedURI: string;
  sample: string;
  sourceFile: string;
  lineNumber: number;
  columnNumber: number;
}

const records: ViolationRecord[] = [];
const listeners = new Set<() => void>();

function onViolation(e: SecurityPolicyViolationEvent) {
  records.push({
    at: performance.now(),
    disposition: e.disposition as ViolationRecord['disposition'],
    effectiveDirective: e.effectiveDirective,
    violatedDirective: e.violatedDirective,
    blockedURI: e.blockedURI,
    sample: e.sample,
    sourceFile: e.sourceFile,
    lineNumber: e.lineNumber,
    columnNumber: e.columnNumber,
  });
  listeners.forEach((l) => l());
}

// Install as early as possible (main.tsx imports this module first).
document.addEventListener('securitypolicyviolation', onViolation);

export const violations = {
  all: (): readonly ViolationRecord[] => records,
  since: (t: number): ViolationRecord[] => records.filter((r) => r.at >= t),
  subscribe(l: () => void): () => void {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};
