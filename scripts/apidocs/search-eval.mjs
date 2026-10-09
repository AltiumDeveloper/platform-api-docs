#!/usr/bin/env node
// Ranking eval for the search box: runs every case of config/search-eval.yaml against static/search-index.json and
// reports where the expected result lands. `--verbose` prints the top results of every case; `--query <q>` prints the
// top results of one ad-hoc query. Exits non-zero when a case misses, so it can gate CI once the cases settle.
import { readFileSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { collapseMembers, indexOptions, loadIndex, search } from '../../src/search/engine.mjs';

const label = (record) => `${record.k.padEnd(10)} ${record.p ? `${record.p}.` : ''}${record.n}`;

export function runEval({ index: indexPath = 'static/search-index.json', cases: casesPath = 'config/search-eval.yaml' } = {}) {
  const loaded = loadIndex(JSON.parse(readFileSync(indexPath, 'utf8')));
  const run = (query) => collapseMembers(search(loaded.index, loaded.records, query, { ...indexOptions(loaded), limit: 60 }));
  const cases = parse(readFileSync(casesPath, 'utf8')).cases;
  const results = cases.map((testCase) => {
    const query = String(testCase.query);
    const list = run(query);
    const expected = [testCase.expect].flat().map(String);
    const rank = list.findIndex(({ record }) => expected.includes(record.n)
      && (!testCase.parent || record.p === testCase.parent) && (!testCase.kind || record.k === testCase.kind)) + 1;
    return { ...testCase, query, rank, pass: rank > 0 && rank <= (testCase.within ?? 1), top: list.slice(0, 5) };
  });
  const mrr = results.reduce((sum, result) => sum + (result.rank ? 1 / result.rank : 0), 0) / results.length;
  return { results, mrr, run };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const args = process.argv.slice(2);
  // `--index <path>` / `--cases <path>` override the defaults (CI evaluates build/search-index.json).
  const option = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
  const { results, mrr, run } = runEval({ index: option('--index'), cases: option('--cases') });
  const adHoc = args.indexOf('--query');
  if (adHoc !== -1) {
    for (const [i, { record, score, more }] of run(args[adHoc + 1] ?? '').slice(0, 15).entries()) {
      console.log(`${String(i + 1).padStart(3)} ${score.toFixed(1).padStart(9)}  ${label(record)}${more ? ` (+${more})` : ''}`);
    }
    process.exit(0);
  }
  for (const result of results) {
    const where = result.rank ? `#${result.rank}` : 'missing';
    console.log(`${result.pass ? 'pass' : 'FAIL'}  ${where.padEnd(8)} ${result.query}  →  ${result.expect}`);
    if (!result.pass || args.includes('--verbose')) for (const { record } of result.top) console.log(`        ${label(record)}`);
  }
  const passed = results.filter((result) => result.pass).length;
  console.log(`\n${passed}/${results.length} pass, MRR ${mrr.toFixed(3)}`);
  process.exitCode = passed === results.length ? 0 : 1;
}
