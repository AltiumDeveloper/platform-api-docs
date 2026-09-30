import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildSchema } from 'graphql';
import { buildSchemaGraph, fieldTarget } from '../scripts/apidocs/lib/schema-graph.mjs';

const fixtureSchema = buildSchema(
  readFileSync(fileURLToPath(new URL('./fixtures/schema.graphql', import.meta.url)), 'utf8'),
  { assumeValidSDL: true },
);

const schema = buildSchema(`
  type Query {
    desReleaseById(id: ID!): DesRelease
    desReleases(first: Int): DesReleaseConnection
    desReleasesByIds(ids: [ID!]!): [DesRelease]!
    desOldRelease(id: ID!): DesRelease @deprecated(reason: "Use desReleaseById.")
    design: DesignQueries
  }
  type Mutation { desReleaseCreate(input: ID!): DesReleaseCreatePayload! }
  type DesignQueries { release: DesignReleaseQueries }
  type DesignReleaseQueries { byId(id: ID!): DesRelease }
  type DesRelease { id: ID! design: DesDesign previous: DesRelease }
  type DesDesign { releases(first: Int): DesReleaseConnection latest: DesRelease! old: DesRelease @deprecated }
  type BomLine { releases: [DesRelease!]! }
  type DesReleaseConnection { edges: [DesReleaseEdge!] nodes: [DesRelease!] }
  type DesReleaseEdge { node: DesRelease! cursor: String! }
  type EdgesOnlyConnection { edges: [EdgesOnlyEdge!] }
  type EdgesOnlyEdge { node: BomLine! }
  type DesReleaseCreatePayload { release: DesRelease }
`);

test('fieldTarget unwraps non-null and lists, and sees through Relay connections (nodes or edges.node)', () => {
  const query = schema.getQueryType().getFields();
  assert.deepEqual(fieldTarget(query.desReleaseById.type), { name: 'DesRelease', shape: 'single' });
  assert.deepEqual(fieldTarget(query.desReleasesByIds.type), { name: 'DesRelease', shape: 'list' });
  assert.deepEqual(fieldTarget(query.desReleases.type), { name: 'DesRelease', shape: 'connection' });
  assert.deepEqual(fieldTarget(schema.getType('DesDesign').getFields().releases.type), { name: 'DesRelease', shape: 'connection' });
  const edgesOnly = buildSchema('type Query { a: EdgesOnlyConnection } type EdgesOnlyConnection { edges: [E!] } type E { node: Int }');
  assert.deepEqual(fieldTarget(edgesOnly.getQueryType().getFields().a.type), { name: 'Int', shape: 'connection' });
});

test('returns lists non-deprecated root queries, including namespaced dotted names', () => {
  const graph = buildSchemaGraph(schema);
  // Sorted with localeCompare (as the overview pages and llms.txt lists are).
  assert.deepEqual(graph.returns('DesRelease'), [
    { operation: 'design.release.byId', shape: 'single' },
    { operation: 'desReleaseById', shape: 'single' },
    { operation: 'desReleases', shape: 'connection' },
    { operation: 'desReleasesByIds', shape: 'list' },
  ]);
  assert.deepEqual(graph.returns('Nope'), []);
});

test('references lists Parent.field from other object types, skipping roots, namespaces, wrappers, payloads, self and deprecated', () => {
  const graph = buildSchemaGraph(schema);
  assert.deepEqual(graph.references('DesRelease'), [
    { parent: 'BomLine', field: 'releases', shape: 'list' },
    { parent: 'DesDesign', field: 'latest', shape: 'single' },
    { parent: 'DesDesign', field: 'releases', shape: 'connection' },
  ]);
  assert.deepEqual(graph.references('DesDesign'), [{ parent: 'DesRelease', field: 'design', shape: 'single' }]);
});

test('on the fixture SDL: namespaced and legacy lookups and a list query', () => {
  const graph = buildSchemaGraph(fixtureSchema);
  assert.deepEqual(graph.returns('DesProject').map((entry) => entry.operation), ['design.project.byId', 'desProjectById']);
  assert.deepEqual(graph.returns('BomWip'), [{ operation: 'bomBoms', shape: 'list' }]);
  assert.deepEqual(graph.returns('DesignQueries'), [], 'namespace wrappers are walked, not returned');
  assert.deepEqual(graph.references('DesProject'), []);
});

test('a custom isNamespace decides which root fields are walked', () => {
  const graph = buildSchemaGraph(schema, { isNamespace: () => false });
  assert.ok(!graph.returns('DesRelease').some((entry) => entry.operation.includes('.')));
  assert.deepEqual(graph.returns('DesignQueries'), [{ operation: 'design', shape: 'single' }]);
});
