import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSchema } from 'graphql';
import { stripDirectives, annotateSdl, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';
import { parseContextMap, contextById } from '../scripts/apidocs/lib/context-map.mjs';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { classifySchema } from '../scripts/apidocs/lib/classify.mjs';

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

const readFixture = (p) => readFileSync(new URL(`./fixtures/${p}`, import.meta.url), 'utf8');

function annotateFixture() {
  const map = parseContextMap(readFixture('context-map.yaml'));
  const cdm = buildCdmIndex([readFixture('cdm/design.yaml'), readFixture('cdm/platform.yaml')]);
  const publicSdl = stripDirectives(sdl, STRIP);
  const classification = classifySchema(buildSchema(publicSdl), map, cdm);
  return buildSchema(annotateSdl(publicSdl, { classification, titleOf: (id) => contextById(map, id).title }));
}

const directiveArg = (astNode, name) => {
  const directive = astNode.directives.find((d) => d.name.value === name);
  return directive ? directive.arguments[0]?.value.value ?? true : undefined;
};

test('adds @doc categories to types, root fields and namespace fields', () => {
  const schema = annotateFixture();
  assert.equal(directiveArg(schema.getType('DesProject').astNode, 'doc'), 'Design');
  assert.equal(directiveArg(schema.getType('DmDeviceModel').astNode, 'doc'), 'Renesas (preview)');
  assert.equal(directiveArg(schema.getType('PageInfo').astNode, 'doc'), 'Common');
  const query = schema.getQueryType().getFields();
  assert.equal(directiveArg(query.desProjectById.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(query.design.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(query.zzzUnknown.astNode, 'doc'), undefined);
  assert.equal(directiveArg(schema.getType('DesignQueries').astNode, 'doc'), 'Design');
  const byId = schema.getType('DesignProjectQueries').getFields().byId;
  assert.equal(directiveArg(byId.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(byId.astNode, 'experimental'), true);
  const mutation = schema.getMutationType().getFields();
  assert.equal(directiveArg(mutation.desCreateCommentThread.astNode, 'doc'), 'Collaboration');
  assert.ok(schema.getDirective('doc'));
});

test('does not duplicate an existing @experimental', () => {
  const schema = annotateFixture();
  const design = schema.getQueryType().getFields().design;
  assert.equal(design.astNode.directives.filter((d) => d.name.value === 'experimental').length, 1);
});
