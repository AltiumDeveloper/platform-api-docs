import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { reorderTypePageSections, beforeComposePageTypeHook } = require('../scripts/apidocs/page-sections.cjs');
const mdx = require('../scripts/apidocs/mdx.cjs');

const DEFAULT_ORDER = ['tags', 'experimentalNote', 'description', 'cdmEntity', 'code', 'metadata', 'example', 'relations', 'customDirectives'];
const RELATIONS = '### Returned By\n\n[`a`](/a)\n\n### Member Of\n\n[`B`](/b)\n\n### Implemented By\n\n[`U`](/u)\n\n';

const objectSections = () => ({
  tags: { content: 'BADGE' },
  experimentalNote: { title: 'Experimental', content: 'note', level: 3 },
  description: { content: 'Desc.' },
  cdmEntity: { title: 'Common Data Model', content: '- x', level: 3 },
  code: { content: '```graphql\ntype X\n```' },
  metadata: { content: [{ title: 'Fields', content: 'f', level: 3 }, { title: 'Interfaces', content: 'i', level: 3 }] },
  relations: { content: RELATIONS },
  customDirectives: undefined,
});

test('orders an object page: CDM, Returned By, Member Of, Interfaces, Implemented By, Fields, then the rest', () => {
  const sections = objectSections();
  const order = reorderTypePageSections(sections, DEFAULT_ORDER);
  assert.deepEqual(order, [
    'tags', 'experimentalNote', 'description', 'cdmEntity',
    'relations:Returned By', 'relations:Member Of', 'metadata:Interfaces', 'relations:Implemented By',
    'metadata:Fields', 'code', 'example', 'customDirectives',
  ]);
  assert.deepEqual(sections['metadata:Fields'], { title: 'Fields', content: 'f', level: 3 });
  assert.deepEqual(sections['relations:Returned By'], { content: '### Returned By\n\n[`a`](/a)' });
  assert.deepEqual(sections['relations:Implemented By'], { content: '### Implemented By\n\n[`U`](/u)' });
});

test('keeps member sections in printer order and skips missing relations (operation page)', () => {
  const sections = {
    description: { content: 'Desc.' },
    code: { content: 'code' },
    metadata: { content: [{ title: 'Arguments', content: 'a', level: 3 }, { title: 'Type', content: 't', level: 3 }] },
    relations: undefined,
  };
  const order = reorderTypePageSections(sections, ['tags', 'description', 'code', 'metadata', 'example', 'relations']);
  assert.deepEqual(order, ['tags', 'description', 'metadata:Arguments', 'metadata:Type', 'code', 'example']);
});

test('handles a single metadata section object (enum page) and unknown relation headings', () => {
  const sections = {
    metadata: { title: 'Values', content: 'v', level: 3 },
    relations: { content: '### Member Of\n\nm\n\n### Something Else\n\ns\n' },
  };
  const order = reorderTypePageSections(sections, ['description', 'code', 'metadata', 'relations']);
  assert.deepEqual(order, ['description', 'relations:Member Of', 'metadata:Values', 'relations:Something Else', 'code']);
});

test('leaves unsplittable metadata in the member position', () => {
  const sections = { metadata: { content: 'raw' } };
  assert.deepEqual(reorderTypePageSections(sections, ['description', 'code', 'metadata']), ['description', 'metadata', 'code']);
});

test('hook rewrites the event output from the event sections', async () => {
  const event = { data: { sections: objectSections() }, output: [...DEFAULT_ORDER] };
  await beforeComposePageTypeHook(event);
  assert.equal(event.output[4], 'relations:Returned By');
  assert.ok(event.data.sections['metadata:Interfaces']);
});

test('formatter module re-exports the Docusaurus MDX formatter and adds the hook', () => {
  assert.equal(typeof mdx.createMDXFormatter, 'function');
  assert.equal(typeof mdx.formatMDXBadge, 'function');
  assert.equal(typeof mdx.beforeGenerateIndexMetafileHook, 'function');
  assert.equal(typeof mdx.mdxDeclaration, 'string');
  assert.equal(mdx.beforeComposePageTypeHook, beforeComposePageTypeHook);
});
