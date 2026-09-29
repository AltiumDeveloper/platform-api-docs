#!/usr/bin/env node
// Runs after `docusaurus graphql-to-doc`: removes the synthetic @doc directive page, writes BC overview
// pages, the pages index used by the sidebar, and legacy-URL redirects.
import { existsSync, readdirSync, readFileSync, realpathSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildPagesIndex, buildRedirects, isDocDirectivePage, readFrontMatter, renderContextOverview,
  stripDocDirectiveLinks,
} from './lib/pages.mjs';

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);

export function runPostprocess({ docsDir = 'docs', schemaDir = '.schema' } = {}) {
  const manifest = readJson(join(schemaDir, 'manifest.json'), null);
  if (!manifest) throw new Error(`postprocess: ${schemaDir}/manifest.json not found; run apidocs:annotate first`);
  const cdmIndex = readJson(join(schemaDir, 'cdm-index.json'), {});
  const referenceDir = join(docsDir, 'reference');

  const files = readdirSync(referenceDir, { recursive: true })
    .map((relative) => relative.split('\\').join('/'))
    .filter((relative) => /\.mdx?$/.test(relative))
    .map((relative) => ({ abs: join(referenceDir, relative), path: `reference/${relative}` }))
    .filter(({ path }) => path.split('/').length >= 5)
    .map((file) => ({ ...file, frontMatter: readFrontMatter(readFileSync(file.abs, 'utf8')) }));

  const kept = [];
  for (const file of files) {
    if (isDocDirectivePage(file)) unlinkSync(file.abs);
    else kept.push(file);
  }
  for (const file of kept) {
    const text = readFileSync(file.abs, 'utf8');
    const stripped = stripDocDirectiveLinks(text);
    if (stripped !== text) writeFileSync(file.abs, stripped);
  }

  const pages = buildPagesIndex(kept, manifest);
  for (const context of manifest.contexts) {
    if (!pages.some((page) => page.context === context.id)) continue;
    writeFileSync(join(referenceDir, context.slug, 'overview.md'), renderContextOverview(context, pages, cdmIndex));
  }
  const redirects = buildRedirects(pages);
  writeFileSync(join(schemaDir, 'pages.json'), JSON.stringify(pages, null, 2));
  writeFileSync(join(schemaDir, 'redirects.json'), JSON.stringify(redirects, null, 2));
  return { pages, redirects };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const { pages, redirects } = runPostprocess();
  console.log(`postprocess: ${pages.length} pages, ${pages.filter((p) => p.experimental).length} experimental, ${redirects.length} redirects`);
}
