import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSchema } from 'graphql';
import {
  DEVELOPER_CENTER_LINKS, entityVia, firstSentence, operationField, pageDescription, renderContextIndex, renderContextTypes,
  renderDeprecatedIndex, renderRootIndex,
} from '../scripts/apidocs/lib/llms-index.mjs';

const SITE = 'https://example.test/docs';

const schema = buildSchema(`
  directive @experimental on FIELD_DEFINITION | OBJECT
  type Query {
    "Gets a project by its identifier. Returns null when missing."
    desProjectById(id: ID!): DesProject
    "**Experimental** Design queries."
    design: DesignQueries @experimental
    "Lists projects."
    desProjects: [DesProject!]!
    "Lists project names."
    desProjectNames: [String!]!
    "Old lookup."
    desOldProject(id: ID!): DesProject @deprecated(reason: "Use desProjectById.")
  }
  type DesignQueries { ruleCheck: RuleCheckQueries }
  type RuleCheckQueries {
    "**Experimental** Gets a rule check."
    byId(id: ID!): RuleCheck
  }
  type Mutation {
    "Runs a rule check."
    designRuleCheckExecute(input: DesignRuleCheckExecuteInput!): Boolean
  }
  "A hardware project."
  type DesProject { id: ID! }
  "A rule check."
  type RuleCheck { id: ID! }
  "Input for designRuleCheckExecute."
  input DesignRuleCheckExecuteInput { id: ID! }
  "Shared paging info."
  type PageInfo { hasNextPage: Boolean! }
  "A connection to a list of items."
  type DesProjectConnection { nodes: [DesProject!] }
  "An edge in a connection."
  type DesProjectEdge { node: DesProject! }
`);

const design = { id: 'design', title: 'Design', slug: 'design', description: 'Hardware projects.', cdm: ['design'] };
const common = { id: 'common', title: 'Common', slug: 'common', description: 'Shared types.', cdm: [] };
const renesas = { id: 'renesas-preview', title: 'Renesas (preview)', slug: 'renesas-preview', description: 'Renesas APIs.', cdm: ['ota'] };

const page = (url, name, section, kind, context, extra = {}) => ({
  docId: url.slice(1), url, name, section, kind, context, experimental: false, deprecated: false, legacyUrl: null, ...extra,
});
const pages = [
  page('/reference/design/operations/queries/des-project-by-id', 'desProjectById', 'operations', 'queries', 'design'),
  page('/reference/design/operations/queries/design/rule-check/by-id', 'design.ruleCheck.byId', 'operations', 'queries', 'design', { experimental: true }),
  page('/reference/design/operations/queries/des-projects', 'desProjects', 'operations', 'queries', 'design'),
  page('/reference/deprecated/design/operations/queries/des-old-project', 'desOldProject', 'operations', 'queries', 'design', { deprecated: true }),
  page('/reference/design/operations/mutations/design-rule-check-execute', 'designRuleCheckExecute', 'operations', 'mutations', 'design'),
  page('/reference/design/types/objects/des-project', 'DesProject', 'types', 'objects', 'design'),
  page('/reference/design/types/objects/rule-check', 'RuleCheck', 'types', 'objects', 'design', { experimental: true }),
  page('/reference/design/types/inputs/design-rule-check-execute-input', 'DesignRuleCheckExecuteInput', 'types', 'inputs', 'design'),
  page('/reference/design/types/objects/des-project-connection', 'DesProjectConnection', 'types', 'objects', 'design'),
  page('/reference/design/types/objects/des-project-edge', 'DesProjectEdge', 'types', 'objects', 'design'),
  page('/reference/common/types/objects/page-info', 'PageInfo', 'types', 'objects', 'common'),
  page('/reference/design/operations/queries/des-project-names', 'desProjectNames', 'operations', 'queries', 'design'),
];
const cdmIndex = {
  DesProject: [{ title: 'Hardware Project', description: 'A hardware design project. It has variants.', grid: 'grid:workspace:{workspace-id}:design:project/{id}' }],
};

test('firstSentence strips the Experimental prefix and keeps the first sentence, at most 200 chars', () => {
  assert.equal(firstSentence('Gets a project by its identifier. Returns null when missing.'), 'Gets a project by its identifier.');
  assert.equal(firstSentence('**Experimental** Gets a rule check.'), 'Gets a rule check.');
  assert.equal(firstSentence('No full stop'), 'No full stop');
  assert.equal(firstSentence(undefined), '');
  const long = firstSentence(`${'x'.repeat(300)}.`);
  assert.equal(long.length, 200);
  assert.ok(long.endsWith('…'));
});

test('operationField walks namespaced operations', () => {
  assert.equal(operationField(schema, 'queries', 'design.ruleCheck.byId').name, 'byId');
  assert.equal(operationField(schema, 'mutations', 'designRuleCheckExecute').name, 'designRuleCheckExecute');
  assert.equal(operationField(schema, 'queries', 'design.nope.byId'), null);
  assert.equal(pageDescription(schema, pages[5]), 'A hardware project.');
});

test('renderContextIndex renders the per-context llms.txt', () => {
  const text = renderContextIndex({ context: design, pages, schema, cdmIndex, siteUrl: SITE, sliceTokens: 123, typesTokens: 45 });
  const expected = [
    '# Design — Altium Platform API',
    '> Hardware projects.',
    '',
    `Concepts: [design](https://altiumdeveloper.github.io/cdm/subsets/design/). Schema slice: [schema.graphql](${SITE}/reference/design/schema.graphql) (~123 tokens). Overview: [overview](${SITE}/reference/design/overview.md).`,
    '',
    '## Entities',
    `- [DesProject](${SITE}/reference/design/types/objects/des-project.md): Hardware Project — A hardware design project. GRID \`grid:workspace:{workspace-id}:design:project/{id}\`. Via: desProjectById, desProjects`,
    '',
    '## Entry points',
    // By-id lookups first, then list queries; each sorted with localeCompare, as on the overview pages.
    `- [design.ruleCheck.byId](${SITE}/reference/design/operations/queries/design/rule-check/by-id.md): Gets a rule check. [EXPERIMENTAL]`,
    `- [desProjectById](${SITE}/reference/design/operations/queries/des-project-by-id.md): Gets a project by its identifier.`,
    `- [desProjects](${SITE}/reference/design/operations/queries/des-projects.md) (list): Lists projects.`,
    '',
    '## Queries',
    `- [desProjectNames](${SITE}/reference/design/operations/queries/des-project-names.md): Lists project names.`,
    '',
    '## Mutations',
    `- [designRuleCheckExecute](${SITE}/reference/design/operations/mutations/design-rule-check-execute.md): Runs a rule check.`,
    '',
    '## Optional',
    `- [All types in Design](${SITE}/reference/design/types.txt): one line per type (~45 tokens)`,
    '',
  ].join('\n');
  assert.equal(text, expected);
});

test('entityVia: root queries (by-id first), then up to 3 references (same context first), at most 5 entries', () => {
  const graph = {
    returns: () => [
      { operation: 'a.list', shape: 'list' }, { operation: 'b', shape: 'single' }, { operation: 'xById', shape: 'single' },
    ],
    references: () => [
      { parent: 'AOther', field: 'x', shape: 'single' }, { parent: 'BMine', field: 'x', shape: 'list' },
      { parent: 'CMine', field: 'y', shape: 'connection' }, { parent: 'DMine', field: 'z', shape: 'single' },
    ],
  };
  const typeContexts = new Map([['AOther', 'other'], ['BMine', 'design'], ['CMine', 'design'], ['DMine', 'design']]);
  assert.equal(entityVia('X', { graph, contextId: 'design', typeContexts }), 'Via: xById, a.list, b, BMine.x, CMine.y, …');
  const few = { returns: () => [{ operation: 'xById', shape: 'single' }], references: () => [{ parent: 'P', field: 'x', shape: 'single' }] };
  assert.equal(entityVia('X', { graph: few, contextId: 'design', typeContexts }), 'Via: xById, P.x');
  assert.equal(entityVia('X', { graph: { returns: () => [], references: () => [] }, contextId: 'design', typeContexts }), '');
});

test('renderContextTypes lists non-entity types, one line each, without Connection and Edge types', () => {
  const text = renderContextTypes({ context: design, pages, schema, cdmIndex, siteUrl: SITE });
  const expected = [
    '# Design — types',
    `> Types of the Design bounded context that are not entities, one line each; Relay \`*Connection\` and \`*Edge\` types are omitted. Entities, entry points and operations: [llms.txt](${SITE}/reference/design/llms.txt).`,
    '',
    `- [RuleCheck](${SITE}/reference/design/types/objects/rule-check.md): A rule check. [EXPERIMENTAL]`,
    `- [DesignRuleCheckExecuteInput](${SITE}/reference/design/types/inputs/design-rule-check-execute-input.md): Input for designRuleCheckExecute.`,
    '',
  ].join('\n');
  assert.equal(text, expected);
});

test('renderContextIndex omits empty sections and deprecated pages', () => {
  const text = renderContextIndex({ context: common, pages, schema, cdmIndex, siteUrl: SITE, sliceTokens: 5, typesTokens: 7 });
  assert.doesNotMatch(text, /Concepts:|## Entities|## Entry points|## Queries|## Mutations|## Subscriptions/);
  assert.ok(text.includes(`## Optional\n- [All types in Common](${SITE}/reference/common/types.txt): one line per type (~7 tokens)`));
  assert.match(renderContextTypes({ context: common, pages, schema, cdmIndex, siteUrl: SITE }), /^# Common — types\n[\s\S]*\n- \[PageInfo\]/);
  const empty = { id: 'empty', title: 'Empty', slug: 'empty', description: 'Nothing.', cdm: [] };
  assert.doesNotMatch(renderContextIndex({ context: empty, pages, schema, cdmIndex, siteUrl: SITE, sliceTokens: 1, typesTokens: 1 }), /## Optional/);
  const designText = renderContextIndex({ context: design, pages, schema, cdmIndex, siteUrl: SITE, sliceTokens: 1 });
  assert.doesNotMatch(designText, /desOldProject|## Subscriptions/);
});

test('renderDeprecatedIndex groups deprecated operations by context with their reason', () => {
  const text = renderDeprecatedIndex({ contexts: [design, common], pages, schema, siteUrl: SITE });
  assert.match(text, /^# Deprecated — Altium Platform API\n/);
  assert.match(text, new RegExp(`## Design\n- \\[desOldProject\\]\\(${SITE}/reference/deprecated/design/operations/queries/des-old-project\\.md\\): Old lookup\\. \\(deprecated: Use desProjectById\\.\\)`));
  assert.doesNotMatch(text, /## Common/);
});

test('renderRootIndex lists contexts, guides, Developer Center and optional files', () => {
  const text = renderRootIndex({
    contexts: [design, renesas, common],
    guides: [{ title: 'Getting started', route: 'guides/getting-started', description: 'Endpoints and a first query.' }],
    siteUrl: SITE,
    schemaTokens: 1000,
    fullTokens: 2000,
  });
  assert.match(text, /^# Altium Platform API\n> GraphQL API for Altium 365/);
  assert.match(text, /How to navigate \(for assistants\):/);
  assert.ok(text.includes(`- [Design](${SITE}/reference/design/llms.txt): Hardware projects. (CDM: [design](https://altiumdeveloper.github.io/cdm/subsets/design/))`));
  assert.ok(text.includes(`- [Renesas (preview)](${SITE}/reference/renesas-preview/llms.txt): Renesas APIs. (preview, Renesas-specific) (CDM: [ota](https://altiumdeveloper.github.io/cdm/subsets/ota/))`));
  assert.ok(!/## Bounded contexts[\s\S]*\[Common\][\s\S]*## Guides/.test(text), 'Common is listed under Optional, not as a bounded context');
  assert.ok(text.includes(`- [Getting started](${SITE}/guides/getting-started.md): Endpoints and a first query.`));
  for (const [title, url] of DEVELOPER_CENTER_LINKS) assert.ok(text.includes(`- [${title}](${url})`));
  assert.ok(text.includes(`- [Common types](${SITE}/reference/common/llms.txt): Shared types.`));
  assert.ok(text.includes(`- [Deprecated](${SITE}/reference/deprecated/llms.txt)`));
  assert.ok(text.includes(`- [Full schema SDL](${SITE}/schema.graphql): ~1000 tokens — prefer per-context slices`));
  assert.ok(text.includes(`- [llms-full.txt](${SITE}/llms-full.txt): all guides and reference pages as markdown (~2000 tokens)`));
  const order = ['## Bounded contexts', '## Guides', '## Developer Center', '## Optional'].map((heading) => text.indexOf(heading));
  assert.deepEqual([...order].sort((a, b) => a - b), order);
  assert.ok(order.every((index) => index > 0));
});
