#!/usr/bin/env node
// Fetches the Platform API changelog HTML from graphql-changelog-tracker and converts it to MDX.
import { mkdirSync, writeFileSync } from 'node:fs';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';

const URL =
  'https://raw.githubusercontent.com/AltiumDeveloper/graphql-changelog-tracker/main/PlatformApi/Cloud/Changelogs/Published/index.html';
const OUT = 'docs/changelog/index.mdx';

const FRONTMATTER = `---
title: Changelog
description: History of additions, changes, and removals to the Platform API.
---

<div className="changelog-page">

`;

const FOOTER = `
</div>
`;

if (process.env.APIDOCS_SCHEMA_FILE) {
  console.log('fetch-changelog: skipped (fixture mode)');
  process.exit(0);
}

const response = await fetch(URL, { signal: AbortSignal.timeout(30000) });
if (!response.ok) {
  console.error(`fetch-changelog: ${response.status} ${response.statusText} from ${URL}`);
  process.exit(1);
}

const html = await response.text();

const file = await unified()
  .use(rehypeParse)
  .use(rehypeRemark)
  .use(remarkMdx)
  .use(remarkStringify, { bullet: '-', fence: '`', fences: true })
  .process(html);

// Convert coloured change-log entry list items to styled block divs.
// remark-stringify escapes leading + as \+; − is U+2212; Δ is U+0394.
const markdown = String(file)
  .replace(/^- \\\+\s+(.+)$/gm, '<div className="cl-entry"><span className="cl-add">+</span> $1</div>')
  .replace(/^- −\s+(.+)$/gm,    '<div className="cl-entry"><span className="cl-remove">−</span> $1</div>')
  .replace(/^- Δ\s+(.+)$/gm,    '<div className="cl-entry"><span className="cl-change">Δ</span> $1</div>');

mkdirSync('docs/changelog', { recursive: true });
writeFileSync(OUT, FRONTMATTER + markdown + FOOTER);
console.log(`fetch-changelog: wrote ${OUT} (${markdown.length} bytes)`);
