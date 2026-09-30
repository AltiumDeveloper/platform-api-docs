import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { htmlToMarkdown, markdownFileFor, renderFrontMatter, rewriteHref } from '../scripts/apidocs/lib/html-to-md.mjs';

const SITE = 'https://altiumdeveloper.github.io/platform-api-docs';
const html = (name) => readFileSync(fileURLToPath(new URL(`./fixtures/html/${name}.html`, import.meta.url)), 'utf8');
const wrap = (body) => `<html><head><title>T | Site</title></head><body><article><div class="theme-doc-markdown markdown">${body}</div></article></body></html>`;
const convert = (source, route = 'reference/design/overview', meta = {}) => htmlToMarkdown(source, { route, siteUrl: SITE, meta });

test('markdownFileFor maps routes to .md files', () => {
  assert.equal(markdownFileFor(''), 'index.md');
  assert.equal(markdownFileFor('/'), 'index.md');
  assert.equal(markdownFileFor('reference/design/overview'), 'reference/design/overview.md');
  assert.equal(markdownFileFor('/guides/errors/'), 'guides/errors.md');
});

test('rewriteHref makes internal links absolute .md URLs and leaves the rest alone', () => {
  const ctx = { route: 'reference/design/types/objects/des-layer', siteUrl: SITE };
  assert.equal(rewriteHref('/platform-api-docs/reference/design/overview', ctx), `${SITE}/reference/design/overview.md`);
  assert.equal(rewriteHref('/platform-api-docs/', ctx), `${SITE}/index.md`);
  assert.equal(rewriteHref('/platform-api-docs/#lifecycle', ctx), `${SITE}/index.md#lifecycle`);
  assert.equal(rewriteHref('/platform-api-docs/reference/design/overview#entry-points', ctx), `${SITE}/reference/design/overview.md#entry-points`);
  assert.equal(rewriteHref('/platform-api-docs/schema.graphql', ctx), `${SITE}/schema.graphql`);
  assert.equal(rewriteHref('/platform-api-docs/img/favicon.ico', ctx), `${SITE}/img/favicon.ico`);
  assert.equal(rewriteHref('des-net', ctx), `${SITE}/reference/design/types/objects/des-net.md`);
  assert.equal(rewriteHref('#fields', ctx), `${SITE}/reference/design/types/objects/des-layer.md#fields`);
  assert.equal(rewriteHref(`${SITE}/reference/common/overview`, ctx), `${SITE}/reference/common/overview.md`);
  assert.equal(rewriteHref('https://altiumdeveloper.github.io/cdm/classes/des_Project/', ctx), 'https://altiumdeveloper.github.io/cdm/classes/des_Project/');
  assert.equal(rewriteHref('https://developer.altium.com/', ctx), 'https://developer.altium.com/');
  assert.equal(rewriteHref('mailto:someone@example.com', ctx), 'mailto:someone@example.com');
});

test('renderFrontMatter writes strings as JSON and booleans bare', () => {
  assert.equal(renderFrontMatter({ title: 'A "b"', experimental: true }), '---\ntitle: "A \\"b\\""\nexperimental: true\n---\n');
});

test('type page: front matter, headings, badges, links, deprecated group and SDL block', () => {
  const md = convert(html('des-layer'), 'reference/design/types/objects/des-layer', {
    bounded_context: 'Design', kind: 'objects', experimental: false, deprecated: false,
  });
  assert.ok(md.startsWith([
    '---',
    'title: "DesLayer"',
    `url: "${SITE}/reference/design/types/objects/des-layer"`,
    'bounded_context: "Design"',
    'kind: "objects"',
    'experimental: false',
    'deprecated: false',
    '---',
    '',
    '# DesLayer',
    '',
    'Information about a specific layer in the PCB.',
  ].join('\n')));
  // Chrome and anchors are gone.
  assert.doesNotMatch(md, /hash-link|Direct link to|Show deprecated|Hide deprecated|breadcrumb|Developer Center|Copyright|\u200b/i);
  assert.doesNotMatch(md, /<[a-z][^>]*>/);
  // Member headings keep their code text, drop the self-link, keep type links and badges as words.
  assert.match(md, new RegExp(`^#### \`DesLayer\\.name\` · \\[\`String!\`\\]\\(${SITE}/reference/common/types/scalars/string\\.md\\) non-null scalar common$`, 'm'));
  assert.match(md, new RegExp(`\\[\`DesDesignItem\`\\]\\(${SITE}/reference/design/types/objects/des-design-item\\.md\\) object · `));
  // <details> deprecated group → heading + content, lifecycle badge in bold, admonition → blockquote.
  assert.match(md, /^#### Deprecated$/m);
  assert.match(md, /^#### `DesLayer\.copperArea` · .* \*\*DEPRECATED\*\* object design$/m);
  assert.match(md, /^> \*\*Deprecated:\*\* No longer used - always returns null\.$/m);
  assert.ok(md.indexOf('#### Deprecated') < md.indexOf('DesLayer.copperArea'));
  // Prism block → fenced graphql, one line per source line.
  assert.match(md, /^```graphql\ntype DesLayer \{\n {2}copperArea: DesArea @deprecated\n/m);
  assert.match(md, /^\}\n```$/m);
});

test('operation page: EXPERIMENTAL badge, caution admonition and namespaced code block', () => {
  const md = convert(html('rule-check-by-id'), 'reference/design/operations/queries/design/rule-check/by-id');
  assert.match(md, /^title: "design\.ruleCheck\.byId"$/m);
  assert.match(md, /^# design\.ruleCheck\.byId\n\n\*\*EXPERIMENTAL\*\*$/m);
  assert.match(md, new RegExp(`^> \\*\\*Caution:\\*\\* Not production-ready\\. It may change or be removed without notice\\. See \\[Lifecycle\\]\\(${SITE}/index\\.md#lifecycle\\)\\.$`, 'm'));
  assert.match(md, /^#### \[`RuleCheck`\]\(.*rule-check\.md\) object design \*\*EXPERIMENTAL\*\*$/m);
  assert.match(md, /^```graphql\ndesign \{\n {2}ruleCheck \{\n {4}byId\(\n/m);
});

test('plain text code blocks, tables and images', () => {
  const md = convert(wrap([
    '<header><h1>Home</h1></header>',
    '<div class="language-text codeBlockContainer_x theme-code-block"><div><pre class="prism-code language-text"><code><div class="token-line"><span>https://eur.365.altium.com/api/graphql</span><br></div></code></pre></div></div>',
    '<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>1</td><td><a href="/platform-api-docs/guides/errors">Errors</a></td></tr></tbody></table>',
    '<p><img src="/platform-api-docs/img/x.png" alt="X"></p>',
  ].join('')), '');
  assert.match(md, /^```text\nhttps:\/\/eur\.365\.altium\.com\/api\/graphql\n```$/m);
  assert.match(md, new RegExp(`^\\| A \\| B \\|\\n\\| - \\| - \\|\\n\\| 1 \\| \\[Errors\\]\\(${SITE}/guides/errors\\.md\\) \\|$`, 'm'));
  assert.ok(md.includes(`![X](${SITE}/img/x.png)`));
  assert.match(md, /^url: "https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/"$/m);
});

test('falls back to <title> for the title and fails without article content', () => {
  const md = convert(wrap('<p>No heading.</p>'));
  assert.match(md, /^title: "T"$/m);
  assert.throws(() => convert('<html><body><p>nothing</p></body></html>'), /no \.theme-doc-markdown content/);
});
