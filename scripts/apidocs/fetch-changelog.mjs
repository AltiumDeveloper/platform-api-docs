#!/usr/bin/env node
// Fetches the Platform API changelog HTML from graphql-changelog-tracker and converts it to MDX.
import { mkdirSync, writeFileSync } from 'node:fs';
import { htmlToChangelog } from './lib/changelog.mjs';

const CHANGELOG_URL =
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

const TRACKER_CHANGELOG_URL = 'https://github.com/AltiumDeveloper/graphql-changelog-tracker';

const PLACEHOLDER = `---
title: Changelog
description: History of additions, changes, and removals to the Platform API.
---

Changelog unavailable. See the [changelog tracker](${TRACKER_CHANGELOG_URL}) for the full history.
`;

function writePlaceholder(reason) {
  mkdirSync('docs/changelog', { recursive: true });
  writeFileSync(OUT, PLACEHOLDER);
  console.warn(`fetch-changelog: wrote placeholder (${reason})`);
}

if (process.env.APIDOCS_SCHEMA_FILE) {
  writePlaceholder('fixture mode');
  process.exit(0);
}

let response;
try {
  response = await fetch(CHANGELOG_URL, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
} catch (error) {
  console.warn(`fetch-changelog: ${error.message} from ${CHANGELOG_URL}; continuing with placeholder`);
  writePlaceholder('fetch failed');
  process.exit(0);
}

const html = await response.text();
const markdown = await htmlToChangelog(html);

mkdirSync('docs/changelog', { recursive: true });
writeFileSync(OUT, FRONTMATTER + markdown + FOOTER);
console.log(`fetch-changelog: wrote ${OUT} (${markdown.length} bytes)`);
