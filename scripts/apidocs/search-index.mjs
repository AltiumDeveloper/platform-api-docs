#!/usr/bin/env node
// Runs after apidocs:postprocess (needs .schema/pages.json and the generated docs/reference tree): writes the
// schema-aware search records to static/search-index.json, which the SearchBar loads on first use. Reads only the
// public SDL, the manifest, the pages index, the guides and the ranking knobs in config/search.yaml.
import { existsSync, mkdirSync, readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { buildSchema } from 'graphql';
import { parse } from 'yaml';
import { readFrontMatter } from './lib/pages.mjs';
import { buildSearchRecords } from './lib/search-records.mjs';
import { readGuides } from './llms.mjs';

const readJson = (path) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null);

export function runSearchIndex({
  schemaDir = '.schema', docsDir = 'docs', out = 'static/search-index.json', configPath = 'config/search.yaml',
} = {}) {
  const config = existsSync(configPath) ? parse(readFileSync(configPath, 'utf8')) ?? {} : {};
  const manifest = readJson(join(schemaDir, 'manifest.json'));
  const pages = readJson(join(schemaDir, 'pages.json'));
  if (!manifest || !pages) throw new Error(`search-index: ${schemaDir}/manifest.json or pages.json not found; run npm run apidocs first`);
  const schema = buildSchema(readFileSync(join(schemaDir, 'annotated.graphql'), 'utf8'), { assumeValidSDL: true });

  const home = join(docsDir, 'index.mdx');
  const guides = [
    ...(existsSync(home) ? [{ route: '', path: home, title: readFrontMatter(readFileSync(home, 'utf8')).title ?? 'Overview' }] : []),
    ...readGuides(join(docsDir, 'guides')),
  ];
  const payload = { version: 1, ...buildSearchRecords({ schema, manifest, pages, docsDir, guides, config }) };
  const json = JSON.stringify(payload);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, json);
  return { records: payload.records.length, bytes: statSync(out).size, gzipBytes: gzipSync(json).length, payload };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const { records, bytes, gzipBytes, payload } = runSearchIndex();
  const byKind = {};
  for (const record of payload.records) byKind[record.k] = (byKind[record.k] ?? 0) + 1;
  console.log(`search-index: ${records} records, ${(bytes / 1024).toFixed(0)} KiB (${(gzipBytes / 1024).toFixed(0)} KiB gzip)`);
  console.log(`  ${Object.entries(byKind).map(([kind, count]) => `${kind} ${count}`).join(', ')}`);
}
