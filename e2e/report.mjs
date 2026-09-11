// Renders e2e/results/results.json into e2e/results/RESULTS.md. Runs on its
// own (`node report.mjs [path/to/results.json]`) and is also called by run.mjs.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

function outcomeCell(r) {
  const marks = { injected: '✅ injected', blocked: '🚫 blocked', error: '💥 error', skipped: '⏭ skipped' };
  const v = r.violations.length ? ` (${r.violations.map((x) => x.disposition[0]).join('')})` : '';
  return `${marks[r.outcome] ?? r.outcome}${v}`;
}

export function markdown(runs, scenarios, meta = {}) {
  const lines = [];
  lines.push('# Results');
  lines.push('');
  lines.push(`Generated ${meta.generatedAt ?? new Date().toISOString()} against \`${meta.baseUrl ?? '?'}\` with ${meta.browser ?? 'Chromium'}.`);
  lines.push('');
  lines.push('Legend: ✅ injected = value reached the sink and took effect · 🚫 blocked = no error, no effect · 💥 error = exception (browser TypeError surfaced through React) · ⏭ skipped = app policy unavailable. A suffix such as `(e)` / `(r)` counts enforced / report-only `securitypolicyviolation` events attributed to the case.');
  lines.push('');
  const versions = [...new Set(runs.map((r) => r.version))];
  for (const s of scenarios) {
    const sRuns = runs.filter((r) => r.scenario === s.id);
    if (sRuns.length === 0) continue;
    lines.push(`## Scenario \`${s.id}\``);
    lines.push('');
    lines.push(`${s.description}`);
    lines.push('');
    const first = sRuns[0];
    lines.push(`- \`Content-Security-Policy\`: \`${first.env.csp ?? '(none)'}\``);
    lines.push(`- \`Content-Security-Policy-Report-Only\`: \`${first.env.cspReportOnly ?? '(none)'}\``);
    lines.push('');
    const optionSets = [...new Map(sRuns.map((r) => [r.optionSet, { label: r.optionSet, query: r.query }])).values()];
    for (const opt of optionSets) {
      const oRuns = sRuns.filter((r) => r.optionSet === opt.label);
      if (oRuns.length === 0) continue;
      lines.push(`### ${opt.label} (\`${opt.query || 'no query'}\`)`);
      lines.push('');
      lines.push('| | ' + versions.map((v) => `react-dom ${oRuns.find((r) => r.version === v)?.env.reactVersion ?? v}`).join(' | ') + ' |');
      lines.push('|---|' + versions.map(() => '---').join('|') + '|');
      const policyRow = (label, pick) => lines.push(`| ${label} | ` + versions.map((v) => pick(oRuns.find((r) => r.version === v)) ?? '').join(' | ') + ' |');
      policyRow('app policy created', (r) => (r ? (r.policy.appPolicyCreated ? '✅' : `❌ ${r.policy.appPolicyError}`) : ''));
      if (opt.query.includes('default')) policyRow('default policy created', (r) => (r ? (r.policy.defaultPolicyCreated ? '✅' : `❌ ${r.policy.defaultPolicyError}`) : ''));
      if (opt.query.includes('dup')) policyRow('duplicate createPolicy()', (r) => (r ? `\`${r.policy.duplicateResult}\`` : ''));
      policyRow('violations during React mount', (r) => (r ? String(r.mountViolations.length) : ''));
      const caseIds = oRuns[0].results.map((x) => x.id);
      for (const id of caseIds) {
        const cells = versions.map((v) => {
          const run = oRuns.find((r) => r.version === v);
          const res = run?.results.find((x) => x.id === id);
          return res ? outcomeCell(res) : '';
        });
        lines.push(`| \`${id}\` | ${cells.join(' | ')} |`);
      }
      lines.push('');
    }
  }
  lines.push('## Details');
  lines.push('');
  for (const run of runs) {
    lines.push(`<details><summary><code>${run.version}</code> / <code>${run.scenario}</code> / ${run.optionSet}</summary>`);
    lines.push('');
    lines.push('| case | outcome | detail | error | violations | default policy calls |');
    lines.push('|---|---|---|---|---|---|');
    for (const r of run.results) {
      const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      lines.push(
        `| \`${r.id}\` | ${r.outcome} | ${esc(r.detail)} | ${esc(r.error)} | ${esc(r.violations.map((v) => `${v.disposition}:${v.effectiveDirective}`).join(', '))} | ${esc(r.defaultCalls.map((d) => `${d.method}(${d.args.join(',')})`).join(', '))} |`,
      );
    }
    if (run.consoleErrors.length) {
      lines.push('');
      lines.push('Console errors:');
      lines.push('');
      lines.push('```');
      lines.push(...run.consoleErrors.map((e) => e.slice(0, 400)));
      lines.push('```');
    }
    lines.push('');
    lines.push('</details>');
    lines.push('');
  }
  return lines.join('\n');
}


export async function writeReport(file = path.join(HERE, 'results', 'results.json')) {
  const data = JSON.parse(await readFile(file, 'utf8'));
  const runs = Array.isArray(data) ? data : data.runs;
  const meta = Array.isArray(data) ? {} : data.meta;
  const scenarios = meta.scenarios ?? [...new Map(runs.map((r) => [r.scenario, { id: r.scenario, description: r.env.scenarios?.find((s) => s.id === r.scenario)?.description ?? '' }])).values()];
  const out = path.join(path.dirname(file), 'RESULTS.md');
  await writeFile(out, markdown(runs, scenarios, meta));
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(`wrote ${await writeReport(process.argv[2])}`);
}
