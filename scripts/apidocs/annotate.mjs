#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSchema } from 'graphql';
import { contextById, loadContextMap } from './lib/context-map.mjs';
import { classifySchema } from './lib/classify.mjs';
import { annotateSdl, rootTypeNamesOf, stripDirectives, STRIP } from './lib/transform-sdl.mjs';
import { buildReport, formatReport, parseAllowlist } from './lib/report.mjs';
import { buildManifest } from './lib/manifest.mjs';

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);

export function runAnnotate({
  schemaDir = '.schema',
  contextMapPath = 'config/context-map.yaml',
  allowlistPath = 'config/unassigned-allowlist.txt',
  publicSchemaPath = 'static/schema.graphql',
} = {}) {
  const publicSdl = stripDirectives(readFileSync(join(schemaDir, 'raw.graphql'), 'utf8'), STRIP);
  const schema = buildSchema(publicSdl, { assumeValidSDL: true });
  const contextMap = loadContextMap(contextMapPath);
  const cdmIndex = readJson(join(schemaDir, 'cdm-index.json'), {});
  const classification = classifySchema(schema, contextMap, cdmIndex);
  const annotated = annotateSdl(publicSdl, { classification, titleOf: (id) => contextById(contextMap, id).title,
    rootTypeNames: rootTypeNamesOf(schema) });
  const allowlist = existsSync(allowlistPath) ? parseAllowlist(readFileSync(allowlistPath, 'utf8')) : new Set();
  const report = buildReport({ classification, cdmIndex, schema, contextMap, allowlist });

  writeFileSync(join(schemaDir, 'annotated.graphql'), annotated);
  mkdirSync(dirname(publicSchemaPath), { recursive: true });
  writeFileSync(publicSchemaPath, publicSdl);
  writeFileSync(join(schemaDir, 'report.json'), JSON.stringify(report, null, 2));
  writeFileSync(join(schemaDir, 'manifest.json'), JSON.stringify(buildManifest({ contextMap, classification, cdmIndex }), null, 2));
  return { report };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const { report } = runAnnotate({
    contextMapPath: process.env.APIDOCS_CONTEXT_MAP || undefined,
    allowlistPath: process.env.APIDOCS_ALLOWLIST || undefined,
  });
  console.log(formatReport(report));
  if (report.blocking.length > 0) {
    console.error(`\nannotate: ${report.blocking.length} unassigned names are not in the allowlist; failing the build.`);
    process.exit(1);
  }
}
