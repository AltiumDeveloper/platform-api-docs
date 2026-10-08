#!/usr/bin/env node
// Runs after `docusaurus graphql-to-doc`: removes the synthetic @doc directive page, retitles namespaced
// operation pages, writes BC overview pages, the pages index used by the sidebar, and legacy-URL redirects.
import { existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildLinkTargets, buildPagesIndex, buildRedirects, linkCodeReferences, isDocDirectivePage, readFrontMatter, renderContextOverview,
  retitleNamespacedOperation, rewriteContextBadges, stripDocDirectiveLinks, stripMemberPrefixes,
} from './lib/pages.mjs';

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);

export function runPostprocess({ docsDir = 'docs', schemaDir = '.schema' } = {}) {
  const manifest = readJson(join(schemaDir, 'manifest.json'), null);
  if (!manifest) throw new Error(`postprocess: ${schemaDir}/manifest.json not found; run apidocs:annotate first`);
  const cdmIndex = readJson(join(schemaDir, 'cdm-index.json'), {});
  const cdmSubsets = readJson(join(schemaDir, 'cdm-subsets.json'), {});
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
    const segments = file.path.split('/');
    const ownSlug = segments[1] === 'deprecated' ? segments[2] : segments[1];
    const stripped = stripMemberPrefixes(rewriteContextBadges(stripDocDirectiveLinks(text), ownSlug, manifest.contexts));
    if (stripped !== text) writeFileSync(file.abs, stripped);
  }

  const pages = buildPagesIndex(kept, manifest);
  const linkTargets = buildLinkTargets(pages);
  pages.forEach((page, index) => {
    const text = readFileSync(kept[index].abs, 'utf8');
    const linked = linkCodeReferences(text, linkTargets, page.url);
    if (linked !== text) writeFileSync(kept[index].abs, linked);
  });
  pages.forEach((page, index) => {
    if (page.section !== 'operations' || !page.name.includes('.')) return;
    const text = readFileSync(kept[index].abs, 'utf8');
    const retitled = retitleNamespacedOperation(text, page.name);
    if (retitled !== text) writeFileSync(kept[index].abs, retitled);
  });
  for (const context of manifest.contexts) {
    mkdirSync(join(referenceDir, context.slug), { recursive: true });
    writeFileSync(join(referenceDir, context.slug, 'overview.md'), renderContextOverview(context, pages, cdmIndex, cdmSubsets));
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
