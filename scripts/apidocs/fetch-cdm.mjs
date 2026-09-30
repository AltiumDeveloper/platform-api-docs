#!/usr/bin/env node
// Builds .schema/cdm-index.json from the public CDM (AltiumDeveloper/cdm). Never fails the build:
// on error it keeps a previous index if present, else writes an empty one, and the site is built without CDM cross-references.
// Set APIDOCS_CDM_DIR to read *.yaml from a local directory instead.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildCdmIndex } from './lib/cdm.mjs';

const REPO = 'AltiumDeveloper/cdm';
const REF = process.env.CDM_REF || 'v0.10.0';
const DIR = 'src/common_data_model/schema';
const OUT = '.schema/cdm-index.json';

async function fetchOk(url) {
  const headers = { 'user-agent': 'platform-api-docs' };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return response;
}

async function loadTexts() {
  if (process.env.APIDOCS_CDM_DIR) {
    const dir = process.env.APIDOCS_CDM_DIR;
    return readdirSync(dir).filter((f) => f.endsWith('.yaml')).map((f) => readFileSync(join(dir, f), 'utf8'));
  }
  const listing = await (await fetchOk(`https://api.github.com/repos/${REPO}/contents/${DIR}?ref=${REF}`)).json();
  const files = listing.filter((entry) => entry.name.endsWith('.yaml'));
  return Promise.all(files.map(async (entry) =>
    (await fetchOk(`https://raw.githubusercontent.com/${REPO}/${REF}/${DIR}/${entry.name}`)).text()));
}

mkdirSync('.schema', { recursive: true });
try {
  const index = buildCdmIndex(await loadTexts());
  writeFileSync(OUT, JSON.stringify(index, null, 2));
  console.log(`fetch-cdm: ${Object.keys(index).length} API types mapped (CDM ${process.env.APIDOCS_CDM_DIR ?? REF})`);
} catch (error) {
  if (existsSync(OUT)) {
    console.warn(`fetch-cdm: ${error.message}; reusing previous ${OUT}`);
  } else {
    console.warn(`fetch-cdm: ${error.message}; continuing without CDM cross-references`);
    writeFileSync(OUT, '{}');
  }
}
