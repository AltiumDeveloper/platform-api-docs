import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { buildSchema } from 'graphql';
import { parseContextMap } from '../scripts/apidocs/lib/context-map.mjs';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { stripDirectives, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';
import { classifySchema } from '../scripts/apidocs/lib/classify.mjs';

const require = createRequire(import.meta.url);
const { getSchemaMap } = require('@graphql-markdown/graphql');

const read = (p) => readFileSync(new URL(`./fixtures/${p}`, import.meta.url), 'utf8');
const map = parseContextMap(read('context-map.yaml'));
const cdmIndex = buildCdmIndex([read('cdm/design.yaml'), read('cdm/platform.yaml')]);
const schema = buildSchema(stripDirectives(read('schema.graphql'), STRIP));

// Guards against a graphql-markdown upgrade changing how namespaced operations (e.g. `design.project.byId`) are detected:
// our classification must name exactly the operations graphql-markdown will render.
test('classify operations match graphql-markdown schema map operations', () => {
  const classified = classifySchema(schema, map, cdmIndex);
  const schemaMap = getSchemaMap(schema);
  for (const kind of ['query', 'mutation']) {
    const expected = Object.keys(schemaMap[kind === 'query' ? 'queries' : 'mutations']).sort();
    // Unassigned operations are still classified operations, just without a context.
    const unassigned = classified.unassigned.filter((item) => item.kind === kind).map((item) => item.name);
    const actual = [...classified.operations[kind].keys(), ...unassigned].sort();
    assert.ok(expected.length > 0, `fixture has ${kind} operations`);
    assert.deepEqual(actual, expected, `${kind} operation names`);
  }
});
