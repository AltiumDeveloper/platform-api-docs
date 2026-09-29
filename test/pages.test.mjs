import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildPagesIndex, buildRedirects, renderContextOverview, readFrontMatter, isDocDirectivePage, stripDocDirectiveLinks,
} from '../scripts/apidocs/lib/pages.mjs';

const manifest = {
  contexts: [
    { id: 'design', title: 'Design', slug: 'design', description: 'Hardware projects.', collapsed: true, cdm: ['design'] },
    { id: 'common', title: 'Common', slug: 'common', description: 'Shared types.', collapsed: true, cdm: [] },
  ],
  operations: {
    query: { desProjectById: 'design', 'design.ruleCheck.byId': 'design' },
    mutation: { designRuleCheckExecute: 'design' },
    subscription: {},
  },
  types: { DesProject: 'design', String: 'common' },
  experimental: { operations: ['design.ruleCheck.byId', 'designRuleCheckExecute'], types: [] },
  cdmTypes: ['DesProject'],
};

const files = [
  { path: 'reference/design/operations/queries/des-project-by-id.mdx', frontMatter: { id: 'des-project-by-id', title: 'desProjectById' } },
  { path: 'reference/design/operations/queries/design/rule-check/by-id.mdx', frontMatter: { id: 'by-id', title: 'byId' } },
  { path: 'reference/design/operations/mutations/design-rule-check-execute.mdx', frontMatter: { id: 'design-rule-check-execute', title: 'designRuleCheckExecute' } },
  { path: 'reference/design/types/objects/des-project.mdx', frontMatter: { id: 'des-project', title: 'DesProject' } },
  { path: 'reference/common/types/scalars/string.mdx', frontMatter: { id: 'string', title: 'String' } },
];

test('readFrontMatter parses the YAML block', () => {
  assert.deepEqual(readFrontMatter('---\nid: by-id\ntitle: byId\n---\n\nbody'), { id: 'by-id', title: 'byId' });
  assert.deepEqual(readFrontMatter('no front matter'), {});
});

test('isDocDirectivePage detects the synthetic @doc directive page', () => {
  assert.ok(isDocDirectivePage({ path: 'reference/common/types/directives/doc.mdx', frontMatter: { title: 'doc' } }));
  assert.ok(!isDocDirectivePage({ path: 'reference/common/types/directives/experimental.mdx', frontMatter: { title: 'experimental' } }));
});

test('buildPagesIndex resolves names, contexts, experimental flags and legacy URLs', () => {
  const pages = buildPagesIndex(files, manifest);
  assert.deepEqual(pages[0], {
    docId: 'reference/design/operations/queries/des-project-by-id',
    url: '/reference/design/operations/queries/des-project-by-id',
    name: 'desProjectById', section: 'operations', kind: 'queries', context: 'design',
    experimental: false, deprecated: false, legacyUrl: '/operations/queries/desProjectById',
  });
  assert.equal(pages[1].name, 'design.ruleCheck.byId');
  assert.equal(pages[1].docId, 'reference/design/operations/queries/design/rule-check/by-id');
  assert.equal(pages[1].experimental, true);
  assert.equal(pages[1].legacyUrl, null);
  assert.equal(pages[2].experimental, true);
  assert.equal(pages[3].legacyUrl, '/types/objects/DesProject');
  assert.equal(pages[4].context, 'common');
});

test('buildRedirects maps legacy URLs to new ones, deduplicated and sorted', () => {
  const redirects = buildRedirects(buildPagesIndex([...files, files[0]], manifest));
  assert.deepEqual(redirects.map((r) => r.from), [
    '/operations/mutations/designRuleCheckExecute',
    '/operations/queries/desProjectById',
    '/types/objects/DesProject',
    '/types/scalars/String',
  ]);
  assert.equal(redirects[2].to, '/reference/design/types/objects/des-project');
});

test('renderContextOverview lists counts, entry points and CDM entities', () => {
  const pages = buildPagesIndex(files, manifest);
  const cdmIndex = { DesProject: [{ title: 'Hardware Project', url: 'https://altiumdeveloper.github.io/cdm/classes/des_Project/' }] };
  const md = renderContextOverview(manifest.contexts[0], pages, cdmIndex);
  assert.match(md, /^---\nid: overview\ntitle: "Design"\n/);
  assert.match(md, /Hardware projects\./);
  assert.match(md, /\| Queries \| 2 \| 1 \|/);
  assert.match(md, /\| Mutations \| 1 \| 1 \|/);
  assert.match(md, /\| Objects \| 1 \| 0 \|/);
  assert.match(md, /- \[`desProjectById`\]\(\/reference\/design\/operations\/queries\/des-project-by-id\)/);
  assert.match(md, /- \[`design\.ruleCheck\.byId`\]/);
  assert.match(md, /\[`DesProject`\]\(\/reference\/design\/types\/objects\/des-project\) — \[Hardware Project\]\(https:\/\/altiumdeveloper\.github\.io\/cdm\/classes\/des_Project\/\)/);
});

const REAL_LINE = '[`DmDeviceModel`](/reference/renesas-preview/types/objects/dm-device-model.mdx)  <Badge class="badge badge--secondary badge--relation" text="object"/><Bullet />[`doc`](/reference/common/types/directives/doc.mdx)  <Badge class="badge badge--secondary badge--relation" text="directive"/><Bullet />[`gloCusCreateExtensionPoint`](/reference/customization/operations/mutations/glo-cus-create-extension-point.mdx)  <Badge class="badge badge--secondary badge--relation" text="mutation"/>';

test('stripDocDirectiveLinks removes the doc link, its badge and one separator from a relation line', () => {
  const out = stripDocDirectiveLinks(`before\n${REAL_LINE}\nafter\n`);
  assert.ok(!out.includes('directives/doc'));
  assert.ok(!out.includes('`doc`'));
  assert.ok(!out.includes('<Bullet /><Bullet />'));
  assert.match(out, /text="object"\/><Bullet \/>\[`gloCusCreateExtensionPoint`\]/);
  assert.match(out, /^before\n/);
  assert.match(out, /\nafter\n$/);
});

test('stripDocDirectiveLinks handles first and last position, anchors and bare targets', () => {
  const badge = '  <Badge class="badge" text="directive"/>';
  assert.equal(stripDocDirectiveLinks(`[\`doc\`](/a/types/directives/doc.mdx)${badge}<Bullet />[\`x\`](/x.mdx)`), '[`x`](/x.mdx)');
  assert.equal(stripDocDirectiveLinks(`[\`x\`](/x.mdx)<Bullet />[\`doc\`](/a/types/directives/doc#foo)${badge}`), '[`x`](/x.mdx)');
  assert.equal(stripDocDirectiveLinks('See [doc](/reference/common/types/directives/doc) now'), 'See  now');
});

test('stripDocDirectiveLinks drops lines left empty and leaves other content alone', () => {
  const only = '[`doc`](/reference/common/types/directives/doc.mdx)  <Badge class="badge" text="directive"/>';
  assert.equal(stripDocDirectiveLinks(`a\n${only}\nb\n`), 'a\nb\n');
  const untouched = '[`deprecated`](/reference/common/types/directives/deprecated.mdx)\n\n\nend\n';
  assert.equal(stripDocDirectiveLinks(untouched), untouched);
});

const deprecatedFiles = [
  { path: 'reference/deprecated/design/operations/queries/des-old.mdx', frontMatter: { id: 'des-old', title: 'desOld' } },
  { path: 'reference/deprecated/design/types/objects/des-legacy.mdx', frontMatter: { id: 'des-legacy', title: 'DesLegacy' } },
];

test('buildPagesIndex handles the deprecated group emitted by graphql-markdown', () => {
  const pages = buildPagesIndex(deprecatedFiles, manifest);
  assert.deepEqual(pages[0], {
    docId: 'reference/deprecated/design/operations/queries/des-old',
    url: '/reference/deprecated/design/operations/queries/des-old',
    name: 'desOld', section: 'operations', kind: 'queries', context: 'design',
    experimental: false, deprecated: true, legacyUrl: '/operations/queries/desOld',
  });
  assert.equal(pages[1].context, 'design');
  assert.equal(pages[1].legacyUrl, '/types/objects/DesLegacy');
  assert.equal(buildPagesIndex(files, manifest)[0].deprecated, false);
});

test('renderContextOverview ignores deprecated pages', () => {
  const pages = buildPagesIndex([...files, ...deprecatedFiles, {
    path: 'reference/deprecated/design/operations/queries/des-old-by-id.mdx',
    frontMatter: { id: 'des-old-by-id', title: 'desOldById' },
  }], manifest);
  const md = renderContextOverview(manifest.contexts[0], pages, {});
  assert.match(md, /\| Queries \| 2 \| 1 \|/);
  assert.match(md, /\| Objects \| 1 \| 0 \|/);
  assert.doesNotMatch(md, /desOldById|deprecated/);
});
