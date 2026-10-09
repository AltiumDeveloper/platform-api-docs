import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildSchema } from 'graphql';
import {
  FLAG_DEPRECATED, FLAG_EXPERIMENTAL, collapseMembers, compileSynonyms, identifierWords, indexOptions, loadIndex, search,
  singular, synonymsOf, tokenize, withinEdits,
} from '../src/search/engine.mjs';
import { buildSearchRecords, guideSections, memberAnchors, plainDescription } from '../scripts/apidocs/lib/search-records.mjs';

const SDL = `
directive @experimental on FIELD_DEFINITION | OBJECT
type Query {
  "Gets a project by its ID."
  desProjectById(id: ID!): DesProject
  desProjects(first: Int, after: String): [DesProject!]!
  "Old lookup."
  desProjectByName(name: String!): DesProject @deprecated(reason: "Use desProjectById.")
  design: DesignQueries
}
type DesignQueries { project: DesignProjectQueries }
type DesignProjectQueries { "Nested lookup." byId(id: ID!): DesProject }
"A project manages all development stages of the PCB/PCA product lifecycle."
type DesProject {
  "Name of the project."
  name: String!
  component: DesComponent
  "**Experimental** Preview data."
  preview: String @experimental
}
"A managed component."
type DesComponent { name: String! componentType: String }
type DesComponentParameter { name: String! }
enum DesProjectState { OPEN CLOSED }
`;

const typePage = (members) => [
  '---', 'title: X', '---', '', '### Fields', '',
  ...members.map((name) => `#### [<code style={{ fontWeight: 'normal' }}><b>${name}</b></code>](#${name.toLowerCase()}-anchor)<Bullet /> {/* #${name.toLowerCase()}-anchor */}`),
  `##### [<code style={{ fontWeight: 'normal' }}><b>after</b></code>](#nested-arg) {/* #nested-arg */}`,
].join('\n');

const page = (name, kind, section, context, extra = {}) => {
  const slug = name.replace(/\./g, '/').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const docId = `reference/${context}/${section}/${kind}/${slug}`;
  return { docId, url: `/${docId}`, name, section, kind, context, experimental: false, deprecated: false, ...extra };
};

function fixture() {
  const docsDir = mkdtempSync(join(tmpdir(), 'apidocs-search-'));
  const pages = [
    page('desProjectById', 'queries', 'operations', 'design'),
    page('desProjects', 'queries', 'operations', 'design'),
    page('desProjectByName', 'queries', 'operations', 'design', { deprecated: true }),
    page('design.project.byId', 'queries', 'operations', 'design', { experimental: true }),
    page('DesProject', 'objects', 'types', 'design'),
    page('DesComponent', 'objects', 'types', 'library-management'),
    page('DesComponentParameter', 'objects', 'types', 'library-management'),
    page('DesProjectState', 'enums', 'types', 'design'),
  ];
  const write = (docId, text) => {
    mkdirSync(join(docsDir, docId, '..'), { recursive: true });
    writeFileSync(join(docsDir, `${docId}.mdx`), text);
  };
  write(pages[4].docId, typePage(['name', 'component', 'preview']));
  write(pages[5].docId, typePage(['name', 'componentType']));
  write(pages[7].docId, typePage(['OPEN', 'CLOSED']));
  const guidePath = join(docsDir, 'pagination.mdx');
  writeFileSync(guidePath, '---\ntitle: Pagination\n---\n\nPaged lists use connections.\n\n## Connections\n\nUse `first` and `after`.\n\n```graphql\n## not a heading\n```\n\n### Custom {#my-id}\n\nText.\n');
  const manifest = {
    contexts: [
      { id: 'design', title: 'Design', slug: 'design', description: 'Projects and designs.' },
      { id: 'library-management', title: 'Library Management', slug: 'library-management', description: 'Components.' },
    ],
  };
  const schema = buildSchema(SDL);
  const config = { prefixes: ['des', 'design'], synonyms: [{ match: '\\bparts? lists?\\b', add: 'component' }] };
  const built = buildSearchRecords({
    schema, manifest, pages, docsDir, config, guides: [{ route: 'guides/pagination', title: 'Pagination', path: guidePath }],
  });
  return { ...built, loaded: loadIndex({ version: 1, ...built }) };
}

const find = (records, name, parent) => records.find((r) => r.n === name && (parent === undefined || r.p === parent));
const top = (loaded, query, options = {}) => search(loaded.index, loaded.records, query, { ...indexOptions(loaded), ...options });

test('identifierWords splits camelCase, acronyms, digits and dotted names', () => {
  assert.deepEqual(identifierWords('desProjectById'), ['des', 'project', 'by', 'id']);
  assert.deepEqual(identifierWords('BOMItem_v2'), ['bom', 'item', 'v', '2']);
  assert.deepEqual(identifierWords('design.project.byId'), ['design', 'project', 'by', 'id']);
});

test('tokenize keeps whole identifiers next to their words; names also get word-boundary suffixes', () => {
  assert.deepEqual(tokenize('desProjectById'), ['desprojectbyid', 'des', 'project', 'by', 'id']);
  assert.deepEqual(tokenize('desProjectById', 'name').slice(5), ['projectbyid', 'byid']);
  assert.deepEqual(tokenize('the pageInfo'), ['the', 'pageinfo', 'page', 'info']);
});

test('synonymsOf maps phrasings to identifier words', () => {
  const table = compileSynonyms([{ match: '\\bbills? of materials?\\b', add: 'bom' }]);
  assert.deepEqual(synonymsOf('Bill of Materials', table), ['bom']);
  assert.deepEqual(synonymsOf('bom', table), []);
  assert.deepEqual(synonymsOf('bill of materials'), []);
});

test('singular undoes English plurals but leaves look-alikes', () => {
  assert.deepEqual(['comments', 'entries', 'addresses', 'boxes', 'status', 'class', 'analysis', 'ids', 'bus'].map(singular),
    ['comment', 'entry', 'address', 'box', 'status', 'class', 'analysis', 'ids', 'bus']);
  assert.ok(tokenize('desComments').includes('comment'));
});

test('withinEdits counts substitutions, insertions, deletions and transpositions', () => {
  assert.ok(withinEdits('workspce', 'workspace', 1));
  assert.ok(withinEdits('desprojcetbyid', 'desprojectbyid', 1));
  assert.ok(!withinEdits('releaseid', 'releasebyid', 1));
  assert.ok(withinEdits('releaseid', 'releasebyid', 2));
});

test('plainDescription drops the Experimental lead and markdown, and truncates', () => {
  assert.equal(plainDescription('**Experimental** Uses [links](http://x) and `code`.'), 'Uses links and code.');
  assert.equal(plainDescription('a'.repeat(50), 10), `${'a'.repeat(9)}…`);
});

test('memberAnchors reads level-4 member headings only', () => {
  const anchors = memberAnchors(typePage(['name', 'componentType']));
  assert.deepEqual([...anchors], [['name', 'name-anchor'], ['componentType', 'componenttype-anchor']]);
  const escaped = memberAnchors("#### [<code style={{ fontWeight: 'normal' }}><b>IN&#x005F;PROGRESS</b></code>](#in-progress) {/* #in-progress */}");
  assert.deepEqual([...escaped], [['IN_PROGRESS', 'in-progress']]);
});

test('guideSections splits at ## and ###, skips fenced code and honours explicit ids', () => {
  const sections = guideSections('---\ntitle: T\n---\nIntro.\n## A `code` heading\nBody.\n```\n## no\n```\n### Custom {#my-id}\nX.\n');
  assert.deepEqual(sections.map((s) => [s.heading, s.anchor]), [[null, null], ['A code heading', 'a-code-heading'], ['Custom', 'my-id']]);
});

test('buildSearchRecords emits operations, types, members, overviews and guide sections with generated URLs', () => {
  const { records, contexts } = fixture();
  assert.deepEqual(contexts.map((c) => c.id), ['design', 'library-management']);
  const byId = find(records, 'desProjectById');
  assert.equal(byId.k, 'query');
  assert.equal(byId.c, 0);
  assert.equal(byId.s, '(id: ID!): DesProject');
  assert.equal(byId.d, 'Gets a project by its ID.');
  assert.equal(find(records, 'design.project.byId').d, 'Nested lookup.');
  assert.equal(find(records, 'design.project.byId').f, FLAG_EXPERIMENTAL);
  assert.equal(find(records, 'desProjectByName').f, FLAG_DEPRECATED);
  assert.equal(find(records, 'desProjectByName').r, 'Use desProjectById.');
  assert.equal(find(records, 'desProjectById').r, undefined);
  const field = find(records, 'name', 'DesProject');
  assert.equal(field.k, 'field');
  assert.equal(field.u, '/reference/design/types/objects/des-project#name-anchor');
  assert.equal(find(records, 'preview', 'DesProject').f, FLAG_EXPERIMENTAL);
  assert.equal(find(records, 'preview', 'DesProject').d, 'Preview data.');
  assert.equal(find(records, 'OPEN', 'DesProjectState').k, 'enumValue');
  assert.equal(find(records, 'Library Management').k, 'overview');
  const guides = records.filter((r) => r.k === 'guide');
  assert.deepEqual(guides.map((g) => [g.n, g.u]), [
    ['Pagination', '/guides/pagination'],
    ['Connections', '/guides/pagination#connections'],
    ['Custom', '/guides/pagination#my-id'],
  ]);
  records.forEach((record, i) => assert.equal(record.i, i));
});

test('an exact name comes first, also for qualified members', () => {
  const { loaded } = fixture();
  assert.equal(top(loaded, 'desProjectById')[0].record.n, 'desProjectById');
  assert.equal(top(loaded, 'design.project.byId')[0].record.n, 'design.project.byId');
  const qualified = top(loaded, 'DesProject.name')[0].record;
  assert.deepEqual([qualified.p, qualified.n], ['DesProject', 'name']);
});

test('a concept finds its entity type before fields and sub-types that share the word', () => {
  const { loaded } = fixture();
  assert.equal(top(loaded, 'component')[0].record.n, 'DesComponent');
  assert.equal(top(loaded, 'components')[0].record.n, 'DesComponent');
  assert.equal(top(loaded, 'project by id')[0].record.n, 'desProjectById');
  assert.equal(top(loaded, 'parts list')[0].record.n, 'DesComponent'); // through the configured synonym
});

test('a member written as Type.member beats a type spelled with the same letters', () => {
  const { loaded } = fixture();
  const first = top(loaded, 'DesProject.component')[0].record;
  assert.deepEqual([first.p, first.n], ['DesProject', 'component']);
});

test('typos find the name only when nothing matches exactly', () => {
  const { loaded } = fixture();
  assert.equal(top(loaded, 'desProjcetById')[0].record.n, 'desProjectById');
  assert.equal(top(loaded, 'DesComponnt')[0].record.n, 'DesComponent');
});

test('results far below the best are dropped', () => {
  const { loaded } = fixture();
  const results = top(loaded, 'desProjectById', { limit: 500 });
  assert.ok(results.every((result) => result.score >= results[0].score * 0.02));
});

test('deprecated items sink and can be filtered out; group and context filters apply', () => {
  const { loaded } = fixture();
  const names = top(loaded, 'project by').map((r) => r.record.n);
  assert.ok(names.indexOf('desProjectById') < names.indexOf('desProjectByName'));
  assert.ok(!top(loaded, 'project by', { includeDeprecated: false }).some((r) => r.record.n === 'desProjectByName'));
  assert.ok(top(loaded, 'name', { group: 'fields' }).every((r) => r.record.p));
  assert.ok(top(loaded, 'name', { context: 1 }).every((r) => r.record.c === 1));
});

test('collapseMembers folds members sharing a name into the best one', () => {
  const { loaded } = fixture();
  const results = collapseMembers(top(loaded, 'name', { group: 'fields' }));
  const name = results.filter((r) => r.record.n === 'name');
  assert.equal(name.length, 1);
  assert.equal(name[0].more, 2);
  assert.equal(name[0].others.length, 2);
  assert.ok(name[0].others.every((record) => record.n === 'name' && record.p !== name[0].record.p));
  assert.equal(collapseMembers(top(loaded, 'name', { group: 'fields' }), { keepAll: true }).filter((r) => r.record.n === 'name').length, 3);
});
