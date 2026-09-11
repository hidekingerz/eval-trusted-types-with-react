// Cases that exercise Trusted Types sinks *through React*.
//
// Notes on what react-dom does under the hood (react-dom 19.3 vs 19.2):
//  * dangerouslySetInnerHTML  -> domElement.innerHTML = __html   (TrustedHTML sink)
//  * attributes such as src/href/srcdoc -> setAttribute(name, value)
//      19.2 coerced with `'' + value` first (turning TrustedScriptURL /
//      TrustedHTML objects back into plain strings); 19.3 passes the value
//      through untouched.
//  * <script> rendered inside the tree is created via
//      div.innerHTML = '<script></script>'  (a plain-string TrustedHTML sink!)
//    so that the browser marks it parser-inserted and never executes it.
//  * <script async src> is hoisted as a "resource": document.createElement('script')
//    + setAttribute('src', ...) + head.appendChild -> this one does execute.
//    The hoisting heuristic requires `typeof props.src === 'string'`, so a
//    TrustedScriptURL object is NOT hoisted and falls back to the path above.

import { useEffect, useState } from 'react';
import { requirePolicy } from '../policy';
import type { ReactCase, Verification } from './types';

declare global {
  interface Window {
    __ttEvalScriptLoaded?: number;
    __ttEvalBackendXss?: boolean;
    __ttEvalInlineExecuted?: boolean;
  }
}

const probe = (label: string) => `<b class="probe" data-label="${label}">${label}</b>`;

function hasProbe(container: HTMLElement, label?: string): Verification {
  const el = container.querySelector<HTMLElement>('.probe');
  if (!el) return { ok: false, detail: 'probe element not found in DOM' };
  const got = el.dataset.label;
  if (label && got !== label) return { ok: false, detail: `probe found but label is "${got}"` };
  return { ok: true, detail: `probe "${got}" rendered` };
}

// Unique per page load so hoisted <script async src> resources are never
// de-duplicated against a previous run.
const runId = Math.random().toString(36).slice(2, 8);
const scriptUrl = (tag: string) => `/api/script.js?tag=${tag}&run=${runId}`;

function scriptExecuted(before: number): Verification {
  const after = window.__ttEvalScriptLoaded ?? 0;
  return after > before
    ? { ok: true, detail: `script executed (load counter ${before} → ${after})` }
    : { ok: false, detail: 'script did not execute' };
}

function useBackendHtml(): string | null {
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    fetch('/api/html')
      .then((r) => r.json())
      .then((j: { html: string }) => alive && setHtml(j.html))
      .catch((e) => alive && setHtml(`<i>backend error: ${String(e)}</i>`));
    return () => {
      alive = false;
    };
  }, []);
  return html;
}

let loadedBefore = 0;

export const reactCases: ReactCase[] = [
  {
    kind: 'react',
    id: 'react-dsih-string',
    title: 'dangerouslySetInnerHTML with a plain string',
    description: '<div dangerouslySetInnerHTML={{ __html: "<b>…</b>" }} /> → element.innerHTML (TrustedHTML sink).',
    Component: () => <div dangerouslySetInnerHTML={{ __html: probe('string') }} />,
    verify: (c) => hasProbe(c, 'string'),
  },
  {
    kind: 'react',
    id: 'react-dsih-trusted-html',
    title: 'dangerouslySetInnerHTML with a TrustedHTML object',
    description: '__html: policy.createHTML("<b>…</b>") → element.innerHTML receives a TrustedHTML.',
    needsPolicy: true,
    Component: () => <div dangerouslySetInnerHTML={{ __html: requirePolicy().createHTML(probe('TrustedHTML')) }} />,
    verify: (c) => hasProbe(c, 'TrustedHTML'),
  },
  {
    kind: 'react',
    id: 'react-dsih-backend-string',
    title: 'HTML from the Go backend, unsanitised string',
    description: 'GET /api/html → dangerouslySetInnerHTML with the raw string (contains an onerror XSS probe).',
    settleMs: 800,
    Component: () => {
      const html = useBackendHtml();
      return html === null ? <i>loading…</i> : <div dangerouslySetInnerHTML={{ __html: html }} />;
    },
    verify: (c) => {
      const el = c.querySelector('.from-backend');
      const xss = window.__ttEvalBackendXss === true;
      window.__ttEvalBackendXss = false;
      return el
        ? { ok: true, detail: `backend HTML rendered; onerror XSS probe ${xss ? 'FIRED' : 'did not fire'}` }
        : { ok: false, detail: 'backend HTML not rendered' };
    },
  },
  {
    kind: 'react',
    id: 'react-dsih-backend-trusted',
    title: 'HTML from the Go backend through the policy',
    description: 'GET /api/html → policy.createHTML(html) (naive sanitiser strips on* attributes) → dangerouslySetInnerHTML.',
    needsPolicy: true,
    settleMs: 800,
    Component: () => {
      const html = useBackendHtml();
      return html === null ? (
        <i>loading…</i>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: requirePolicy().createHTML(html) }} />
      );
    },
    verify: (c) => {
      const el = c.querySelector('.from-backend');
      const xss = window.__ttEvalBackendXss === true;
      window.__ttEvalBackendXss = false;
      return el
        ? { ok: true, detail: `backend HTML rendered; onerror XSS probe ${xss ? 'FIRED' : 'did not fire'}` }
        : { ok: false, detail: 'backend HTML not rendered' };
    },
  },
  {
    kind: 'react',
    id: 'react-script-inline',
    title: '<script> with inline text inside the React tree',
    description:
      '<script>{"…"}</script> → react-dom creates the element via div.innerHTML="<script></script>" (string!) and sets textContent. Never executed by design.',
    Component: () => <script>{'window.__ttEvalInlineExecuted = true;'}</script>,
    verify: (c) => {
      const el = c.querySelector('script');
      const executed = window.__ttEvalInlineExecuted === true;
      window.__ttEvalInlineExecuted = false;
      return el
        ? { ok: true, detail: `script element created; executed=${executed}` }
        : { ok: false, detail: 'script element not created' };
    },
  },
  {
    kind: 'react',
    id: 'react-script-text-trusted',
    title: '<script> with a TrustedScript as children',
    description: '<script>{policy.createScript("…")}</script> → React rejects non-string children before any sink is reached.',
    needsPolicy: true,
    Component: () => <script>{requirePolicy().createScript('window.__ttEvalInlineExecuted = true;') as unknown as string}</script>,
    verify: (c) => (c.querySelector('script') ? { ok: true, detail: 'script element created' } : { ok: false, detail: 'script element not created' }),
  },
  {
    kind: 'react',
    id: 'react-script-src-string',
    title: '<script src="…"> (in-tree, not async) with a string',
    description: 'Element created via innerHTML="<script></script>", then setAttribute("src", string) (TrustedScriptURL sink). Not executed by design.',
    Component: () => <script src={scriptUrl('sync-string')} />,
    verify: (c) => (c.querySelector('script[src]') ? { ok: true, detail: 'script element with src created (not executed by design)' } : { ok: false, detail: 'script element not created' }),
  },
  {
    kind: 'react',
    id: 'react-script-src-trusted',
    title: '<script src={TrustedScriptURL}> (in-tree, not async)',
    description: 'Same as above but src is policy.createScriptURL(...). Element creation itself still goes through innerHTML with a string.',
    needsPolicy: true,
    Component: () => <script src={requirePolicy().createScriptURL(scriptUrl('sync-trusted')) as unknown as string} />,
    verify: (c) => (c.querySelector('script[src]') ? { ok: true, detail: 'script element with src created (not executed by design)' } : { ok: false, detail: 'script element not created' }),
  },
  {
    kind: 'react',
    id: 'react-script-async-src-string',
    title: '<script async src="…"> hoisted resource with a string',
    description: 'React 19 hoists <script async src> into <head> via createElement("script") + setAttribute("src", string). This one executes.',
    settleMs: 1200,
    Component: () => {
      loadedBefore = window.__ttEvalScriptLoaded ?? 0;
      return <script async src={scriptUrl('async-string')} />;
    },
    verify: () => {
      const el = document.head.querySelector('script[src*="tag=async-string"]');
      const exec = scriptExecuted(loadedBefore);
      return el ? { ok: exec.ok, detail: `hoisted into <head>; ${exec.detail}` } : { ok: false, detail: 'script not hoisted into <head>' };
    },
  },
  {
    kind: 'react',
    id: 'react-script-async-src-trusted',
    title: '<script async src={TrustedScriptURL}> hoisted resource',
    description:
      'Same as above with policy.createScriptURL(...). react-dom only hoists when typeof src === "string", so a TrustedScriptURL falls back to the in-tree (innerHTML-created, never executed) path.',
    needsPolicy: true,
    settleMs: 1200,
    Component: () => {
      loadedBefore = window.__ttEvalScriptLoaded ?? 0;
      return <script async src={requirePolicy().createScriptURL(scriptUrl('async-trusted')) as unknown as string} />;
    },
    verify: () => {
      const el = document.head.querySelector('script[src*="tag=async-trusted"]');
      const exec = scriptExecuted(loadedBefore);
      return el ? { ok: exec.ok, detail: `hoisted into <head>; ${exec.detail}` } : { ok: false, detail: 'script not hoisted into <head>' };
    },
  },
  {
    kind: 'react',
    id: 'react-iframe-srcdoc-string',
    title: '<iframe srcDoc="…"> with a string',
    description: 'setAttribute("srcdoc", string) — TrustedHTML sink.',
    settleMs: 600,
    Component: () => <iframe title="srcdoc-string" srcDoc={`<html><body>${probe('srcdoc-string')}</body></html>`} />,
    verify: (c) => {
      const f = c.querySelector('iframe');
      if (!f) return { ok: false, detail: 'iframe not rendered' };
      if (!f.hasAttribute('srcdoc')) return { ok: false, detail: 'iframe rendered but srcdoc attribute missing' };
      const inner = f.contentDocument?.querySelector('.probe');
      return inner ? { ok: true, detail: 'srcdoc document rendered' } : { ok: false, detail: 'srcdoc attribute set but document empty' };
    },
  },
  {
    kind: 'react',
    id: 'react-iframe-srcdoc-trusted',
    title: '<iframe srcDoc={TrustedHTML}>',
    description: 'srcDoc is policy.createHTML(...). 19.2 stringified it; 19.3 forwards the TrustedHTML to setAttribute.',
    needsPolicy: true,
    settleMs: 600,
    Component: () => (
      <iframe
        title="srcdoc-trusted"
        srcDoc={requirePolicy().createHTML(`<html><body>${probe('srcdoc-trusted')}</body></html>`) as unknown as string}
      />
    ),
    verify: (c) => {
      const f = c.querySelector('iframe');
      if (!f) return { ok: false, detail: 'iframe not rendered' };
      if (!f.hasAttribute('srcdoc')) return { ok: false, detail: 'iframe rendered but srcdoc attribute missing' };
      const inner = f.contentDocument?.querySelector('.probe');
      return inner ? { ok: true, detail: 'srcdoc document rendered' } : { ok: false, detail: 'srcdoc attribute set but document empty' };
    },
  },
  {
    kind: 'react',
    id: 'react-a-href-string',
    title: '<a href="…"> with a string (control, not a Trusted Types sink)',
    description: 'href is a URL attribute React sanitises for javascript: but it is not a Trusted Types sink; should always work.',
    Component: () => (
      <a className="probe" data-label="href" href="/api/health">
        href
      </a>
    ),
    verify: (c) => {
      const a = c.querySelector<HTMLAnchorElement>('a.probe');
      return a?.getAttribute('href') === '/api/health' ? { ok: true, detail: 'href attribute set' } : { ok: false, detail: 'href not set' };
    },
  },
];
