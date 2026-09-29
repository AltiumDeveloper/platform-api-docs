import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { buildSchema } from 'graphql';

const require = createRequire(import.meta.url);
const { getSchemaMap } = require('@graphql-markdown/graphql');

test('plural *Queries wrappers are treated as operation namespaces', () => {
  const schema = buildSchema(`
    type Query { design: DesignQueries }
    type DesignQueries { project: DesignProjectQueries }
    type DesignProjectQueries { byId(id: ID!): String }
    type Mutation { noop: Boolean }
  `);
  const map = getSchemaMap(schema);
  assert.ok(map.queries['design.project.byId'], 'design.project.byId should be a query');
  assert.equal(map.objects?.DesignQueries, undefined, 'wrapper types are not documented as objects');
  assert.equal(map.objects?.DesignProjectQueries, undefined);
});

test('singular *Query wrappers still work', () => {
  const schema = buildSchema(`
    type Query { analytics: AnalyticsQuery }
    type AnalyticsQuery { total: Int }
  `);
  assert.ok(getSchemaMap(schema).queries['analytics.total']);
});
