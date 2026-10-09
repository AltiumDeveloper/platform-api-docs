#!/usr/bin/env node
// Runs after `npm run build`: checks the search index the build shipped. The content-hashed index exists exactly once
// and equals build/search-index.json; record ids are 0..n-1, kinds and context indexes are valid, and every record URL
// resolves to a built page and an existing anchor. Logic in lib/search-check.mjs.
import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { runSearchCheck } from './lib/search-check.mjs';

const MAX_REPORTED = 20;

const describe = (record) => (record ? `#${record.i} ${record.k} ${record.p ? `${record.p}.` : ''}${record.n} (${record.u})` : 'index');

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const buildDir = process.argv.includes('--build') ? process.argv[process.argv.indexOf('--build') + 1] : 'build';
  const { file, records, pages, anchors, problems } = runSearchCheck({ buildDir });
  for (const { record, message } of problems.slice(0, MAX_REPORTED)) console.error(`search:check: ${describe(record)}: ${message}`);
  if (problems.length > MAX_REPORTED) console.error(`search:check: … and ${problems.length - MAX_REPORTED} more`);
  console.log(`search:check: ${file ?? 'no index'}: ${records} records, ${pages} pages, ${anchors} anchors checked, ${problems.length} problem(s)`);
  if (problems.length) process.exit(1);
}
