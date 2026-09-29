import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSchema } from 'graphql';
import { stripDirectives, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';

const sdl = readFileSync(new URL('./fixtures/schema.graphql', import.meta.url), 'utf8');

test('removes @authorize, @cost, their definitions and ApplyPolicy', () => {
  const out = stripDirectives(sdl, STRIP);
  assert.doesNotMatch(out, /@authorize|@cost|directive @authorize|directive @cost|ApplyPolicy/);
  assert.match(out, /@experimental/);
  assert.match(out, /@deprecated\(reason: "Use `name`\."\)/);
  assert.match(out, /"Gets a project by its identifier\."/);
  const schema = buildSchema(out);
  assert.ok(schema.getType('DesProject'));
  assert.equal(schema.getType('ApplyPolicy'), undefined);
});
