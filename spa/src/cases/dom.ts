// Control cases that hit the sinks directly, without React. They show the
// raw browser behaviour under the current CSP so React's behaviour can be
// compared against it.

import { requirePolicy } from '../policy';
import type { DomCase, Verification } from './types';

declare global {
  interface Window {
    __ttEvalDomExec?: number;
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function executed(before: number, what: string): Verification {
  const after = window.__ttEvalDomExec ?? 0;
  return after > before ? { ok: true, detail: `${what} executed` } : { ok: false, detail: `${what} did not execute` };
}

async function loadScript(container: HTMLElement, src: string | TrustedScriptURL): Promise<Verification> {
  const before = window.__ttEvalScriptLoaded ?? 0;
  const s = document.createElement('script');
  s.src = src as string;
  const done = new Promise<void>((resolve) => {
    s.onload = () => resolve();
    s.onerror = () => resolve();
    setTimeout(resolve, 1500);
  });
  container.appendChild(s);
  await done;
  const after = window.__ttEvalScriptLoaded ?? 0;
  return after > before ? { ok: true, detail: 'script loaded and executed' } : { ok: false, detail: 'script did not execute' };
}

export const domCases: DomCase[] = [
  {
    kind: 'dom',
    id: 'dom-innerhtml-string',
    title: 'element.innerHTML = string',
    description: 'Raw TrustedHTML sink with a plain string.',
    run: async (c) => {
      c.innerHTML = '<b class="probe">innerHTML</b>';
      return c.querySelector('.probe') ? { ok: true, detail: 'HTML injected' } : { ok: false, detail: 'nothing injected' };
    },
  },
  {
    kind: 'dom',
    id: 'dom-innerhtml-trusted',
    title: 'element.innerHTML = TrustedHTML',
    description: 'Raw TrustedHTML sink with policy.createHTML(...).',
    needsPolicy: true,
    run: async (c) => {
      c.innerHTML = requirePolicy().createHTML('<b class="probe">TrustedHTML</b>') as unknown as string;
      return c.querySelector('.probe') ? { ok: true, detail: 'HTML injected' } : { ok: false, detail: 'nothing injected' };
    },
  },
  {
    kind: 'dom',
    id: 'dom-domparser-string',
    title: 'new DOMParser().parseFromString(string)',
    description: 'TrustedHTML sink used by many sanitiser libraries internally.',
    run: async () => {
      const doc = new DOMParser().parseFromString('<b class="probe">parsed</b>', 'text/html');
      return doc.querySelector('.probe') ? { ok: true, detail: 'parsed' } : { ok: false, detail: 'not parsed' };
    },
  },
  {
    kind: 'dom',
    id: 'dom-eval-string',
    title: 'eval(string)',
    description: 'TrustedScript sink.',
    run: async () => {
      const before = window.__ttEvalDomExec ?? 0;
      // eslint-disable-next-line no-eval
      (0, eval)('window.__ttEvalDomExec = (window.__ttEvalDomExec ?? 0) + 1;');
      return executed(before, 'eval(string)');
    },
  },
  {
    kind: 'dom',
    id: 'dom-eval-trusted',
    title: 'eval(TrustedScript)',
    description: 'TrustedScript sink with policy.createScript(...).',
    needsPolicy: true,
    run: async () => {
      const before = window.__ttEvalDomExec ?? 0;
      // eslint-disable-next-line no-eval
      (0, eval)(requirePolicy().createScript('window.__ttEvalDomExec = (window.__ttEvalDomExec ?? 0) + 1;') as unknown as string);
      return executed(before, 'eval(TrustedScript)');
    },
  },
  {
    kind: 'dom',
    id: 'dom-settimeout-string',
    title: 'setTimeout(string)',
    description: 'TrustedScript sink.',
    run: async () => {
      const before = window.__ttEvalDomExec ?? 0;
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      setTimeout('window.__ttEvalDomExec = (window.__ttEvalDomExec ?? 0) + 1;' as unknown as TimerHandler, 0);
      await sleep(50);
      return executed(before, 'setTimeout(string)');
    },
  },
  {
    kind: 'dom',
    id: 'dom-setattribute-onclick-string',
    title: 'element.setAttribute("onclick", string)',
    description: 'Event handler content attributes are TrustedScript sinks.',
    run: async (c) => {
      const before = window.__ttEvalDomExec ?? 0;
      const b = document.createElement('button');
      b.setAttribute('onclick', 'window.__ttEvalDomExec = (window.__ttEvalDomExec ?? 0) + 1;');
      c.appendChild(b);
      b.click();
      return executed(before, 'onclick attribute');
    },
  },
  {
    kind: 'dom',
    id: 'dom-script-src-string',
    title: 'createElement("script").src = string',
    description: 'TrustedScriptURL sink.',
    run: (c) => loadScript(c, `/api/script.js?tag=dom-string&r=${Math.random()}`),
  },
  {
    kind: 'dom',
    id: 'dom-script-src-trusted',
    title: 'createElement("script").src = TrustedScriptURL',
    description: 'TrustedScriptURL sink with policy.createScriptURL(...).',
    needsPolicy: true,
    run: (c) => loadScript(c, requirePolicy().createScriptURL(`/api/script.js?tag=dom-trusted&r=${Math.random()}`)),
  },
];
