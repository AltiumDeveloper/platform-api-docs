#!/usr/bin/env node
// Builds .schema/cdm-index.json from the public CDM (AltiumDeveloper/cdm). Never fails the build:
// on error it keeps a previous index if present, else writes an empty one, and the site is built without CDM cross-references.
// Follows CDM `main` by default (CDM_REF overrides: tag, branch or SHA). The ref is resolved to a commit SHA first and
// every file is listed and downloaded at that SHA, so one run never mixes versions.
// Set APIDOCS_CDM_DIR to read *.yaml from a local directory instead.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  buildCdmIndex, buildCdmMeta, buildCdmSubsets, cdmListUrl, cdmRawUrl, cdmResolveUrl, CDM_REPO, DEFAULT_CDM_REF,
} from './lib/cdm.mjs';

const REF = process.env.CDM_REF || DEFAULT_CDM_REF;
const OUT = '.schema/cdm-index.json';
// Subset (bounded context) descriptions for the overview pages; like the index, kept from the previous run on failure.
const OUT_SUBSETS = '.schema/cdm-subsets.json';
// {ref, sha, fetchedAt, source} of the CDM the index was built from; read by annotate for notes/cdm-mismatches.md.
const META = '.schema/cdm-meta.json';

async function fetchOk(url, accept) {
  const headers = { 'user-agent': 'platform-api-docs' };
  if (accept) headers.accept = accept;
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return response;
}

async function loadCdm() {
  if (process.env.APIDOCS_CDM_DIR) {
    const dir = process.env.APIDOCS_CDM_DIR;
    const texts = readdirSync(dir).filter((f) => f.endsWith('.yaml')).map((f) => readFileSync(join(dir, f), 'utf8'));
    return { texts, sha: null };
  }
  const github = 'application/vnd.github+json';
  const { sha } = await (await fetchOk(cdmResolveUrl(REF), github)).json();
  if (!sha) throw new Error(`could not resolve CDM ref ${REF} to a commit`);
  const listing = await (await fetchOk(cdmListUrl(sha), github)).json();
  const files = listing.filter((entry) => entry.name.endsWith('.yaml'));
  const texts = await Promise.all(files.map(async (entry) => (await fetchOk(cdmRawUrl(sha, entry.name))).text()));
  return { texts, sha };
}

const writeMeta = (meta) => writeFileSync(META, JSON.stringify(meta, null, 2));
const SOURCE = process.env.APIDOCS_CDM_DIR ? `dir:${process.env.APIDOCS_CDM_DIR}` : `github:${CDM_REPO}`;

mkdirSync('.schema', { recursive: true });
try {
  const { texts, sha } = await loadCdm();
  const index = buildCdmIndex(texts);
  writeFileSync(OUT, JSON.stringify(index, null, 2));
  writeFileSync(OUT_SUBSETS, JSON.stringify(buildCdmSubsets(texts), null, 2));
  writeMeta(buildCdmMeta({
    ref: process.env.APIDOCS_CDM_DIR ? 'local' : REF, sha, fetchedAt: new Date().toISOString(), source: SOURCE,
  }));
  console.log(`fetch-cdm: ${Object.keys(index).length} API types mapped (CDM ${process.env.APIDOCS_CDM_DIR ?? `${REF} @ ${sha.slice(0, 7)}`})`);
} catch (error) {
  if (existsSync(OUT)) {
    console.warn(`fetch-cdm: ${error.message}; reusing previous ${OUT}`);
    if (!existsSync(META)) writeMeta(buildCdmMeta({ ref: 'unknown (cached)', source: SOURCE }));
  } else {
    console.warn(`fetch-cdm: ${error.message}; continuing without CDM cross-references`);
    writeFileSync(OUT, '{}');
    if (!existsSync(OUT_SUBSETS)) writeFileSync(OUT_SUBSETS, '{}');
    writeMeta(buildCdmMeta({
      ref: null,
      source: process.env.APIDOCS_CDM_DIR ? `${SOURCE} (unavailable, empty index)` : 'unavailable (empty index)',
    }));
  }
}
