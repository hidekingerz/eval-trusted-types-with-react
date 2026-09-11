// Drives every (React build × CSP scenario × option set) combination served
// by the proxy in headless Chromium, collects the results the SPA exposes on
// window.__ttEval, and writes results/results.json + results/RESULTS.md.
//
//   BASE_URL=http://localhost:8080 node run.mjs
//   CHROMIUM_PATH=/path/to/chrome  (optional, otherwise Playwright's bundled Chromium)
//   ONLY=enforce,enforce-named      (optional scenario filter)

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { writeReport } from './report.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE_URL = (process.env.BASE_URL ?? 'http://localhost:8080').replace(/\/$/, '');
const OUT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'results');
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',')) : null;

// Option sets to run for every scenario. Each entry becomes a query string.
const OPTION_SETS = [
  { label: 'app policy only', query: '' },
  { label: 'app policy + sanitising default policy', query: '?default=sanitize' },
  { label: 'app policy + pass-through default policy', query: '?default=passthrough' },
  { label: 'app policy created twice', query: '?dup=1' },
];

async function fetchJson(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} -> ${r.status}`);
  return r.json();
}

async function runOne(browser, version, scenario, optionSet) {
  const url = `${BASE_URL}/${version}/${scenario}/${optionSet.query}`;
  const context = await browser.newContext();
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text());
  });
  page.on('pageerror', (e) => consoleErrors.push(`pageerror: ${e.message}`));
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__ttEval?.done === true, null, { timeout: 60_000 });
  const snapshot = await page.evaluate(() => window.__ttEval.snapshot());
  await context.close();
  return { url, version, scenario, optionSet: optionSet.label, query: optionSet.query, consoleErrors, ...snapshot };
}

const { versions, scenarios } = await fetchJson(`${BASE_URL}/scenarios.json`);
const selected = scenarios.filter((s) => !ONLY || ONLY.has(s.id));
console.log(`versions: ${versions.join(', ')}; scenarios: ${selected.map((s) => s.id).join(', ')}`);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const meta = { generatedAt: new Date().toISOString(), baseUrl: BASE_URL, browser: `Chromium ${browser.version()}`, scenarios: selected, optionSets: OPTION_SETS };
const runs = [];
try {
  for (const s of selected) {
    for (const opt of OPTION_SETS) {
      for (const v of versions) {
        process.stdout.write(`${v} ${s.id} [${opt.label}] … `);
        const run = await runOne(browser, v, s.id, opt);
        runs.push(run);
        const counts = run.results.reduce((acc, r) => ((acc[r.outcome] = (acc[r.outcome] ?? 0) + 1), acc), {});
        console.log(JSON.stringify(counts));
      }
    }
  }
} finally {
  await browser.close();
}

await mkdir(OUT_DIR, { recursive: true });
await writeFile(path.join(OUT_DIR, 'results.json'), JSON.stringify({ meta, runs }, null, 2));
console.log(`wrote ${await writeReport(path.join(OUT_DIR, 'results.json'))}`);
