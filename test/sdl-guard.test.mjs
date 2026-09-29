import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkSdl } from '../scripts/apidocs/lib/sdl-guard.mjs';

const sdl = 'type Query { hello: String }\n';

test('accepts a valid schema', () => {
  assert.doesNotThrow(() => checkSdl(sdl, 0));
});

test('rejects empty text', () => {
  assert.throws(() => checkSdl('  ', 0), /empty/);
});

test('rejects unparseable SDL', () => {
  assert.throws(() => checkSdl('type Query {', 0), /does not parse/);
});

test('rejects a schema without a Query type', () => {
  assert.throws(() => checkSdl('type Foo { a: Int }', 0), /no Query type/);
});

test('rejects a schema that shrank by more than half', () => {
  assert.throws(() => checkSdl(sdl, sdl.length * 3), /shrank/);
  assert.doesNotThrow(() => checkSdl(sdl, sdl.length + 1));
});
