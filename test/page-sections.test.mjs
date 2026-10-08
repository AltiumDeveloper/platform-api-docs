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

test('orders an object page: CDM, Returned By, Member Of, Interfaces, Implemented By, SDL code, Fields, then the rest', () => {
  const sections = objectSections();
  const order = reorderTypePageSections(sections, DEFAULT_ORDER);
  assert.deepEqual(order, [
    'tags', 'experimentalNote', 'description', 'cdmEntity',
    'relations:Returned By', 'relations:Member Of', 'metadata:Interfaces', 'relations:Implemented By',
    'split:open', 'code', 'split:mid', 'metadata:Fields', 'split:close', 'example', 'customDirectives',
  ]);
  assert.match(sections['split:open'].content, /^<div className="ref-split">\n\n<div className="ref-split__code">\n$/);
  assert.match(sections['split:mid'].content, /ref-split__fields/);
  assert.deepEqual(sections['metadata:Fields'], { title: 'Fields', content: 'f', level: 3 });
  assert.deepEqual(sections['relations:Returned By'], { content: '### Returned By\n\n[`a`](/a)' });
  assert.deepEqual(sections['relations:Implemented By'], { content: '### Implemented By\n\n[`U`](/u)' });
});

test('operation page: Type first, then SDL beside Arguments; missing relations are skipped', () => {
  const sections = {
    description: { content: 'Desc.' },
    code: { content: 'code' },
    metadata: { content: [{ title: 'Arguments', content: 'a', level: 3 }, { title: 'Type', content: 't', level: 3 }] },
    relations: undefined,
  };
  const order = reorderTypePageSections(sections, ['tags', 'description', 'code', 'metadata', 'example', 'relations']);
  assert.deepEqual(order, [
    'tags', 'description', 'metadata:Type', 'split:open', 'code', 'split:mid', 'metadata:Arguments', 'split:close', 'example',
  ]);
});

test('handles a single metadata section object (enum page) and unknown relation headings', () => {
  const sections = {
    metadata: { title: 'Values', content: 'v', level: 3 },
    relations: { content: '### Member Of\n\nm\n\n### Something Else\n\ns\n' },
  };
  const order = reorderTypePageSections(sections, ['description', 'code', 'metadata', 'relations']);
  assert.deepEqual(order, ['description', 'relations:Member Of', 'split:open', 'code', 'split:mid', 'metadata:Values', 'split:close', 'relations:Something Else']);
});

test('leaves unsplittable metadata after the code block', () => {
  const sections = { metadata: { content: 'raw' } };
  assert.deepEqual(reorderTypePageSections(sections, ['description', 'code', 'metadata']), ['description', 'code', 'metadata']);
});

test('hook rewrites the event output from the event sections', async () => {
  const event = { data: { sections: objectSections() }, output: [...DEFAULT_ORDER] };
  await beforeComposePageTypeHook(event);
  assert.equal(event.output[4], 'relations:Returned By');
  assert.ok(event.output.includes('split:open'));
  assert.ok(event.data.sections['metadata:Interfaces']);
});

test('hook leaves malformed events untouched and does not throw', async () => {
  const warn = console.warn;
  const warnings = [];
  console.warn = (...args) => warnings.push(args.join(' '));
  try {
    const noSections = { data: {}, output: [...DEFAULT_ORDER] };
    await beforeComposePageTypeHook(noSections);
    assert.deepEqual(noSections.output, DEFAULT_ORDER);

    const badOutput = { data: { sections: objectSections() }, output: 'nope' };
    await beforeComposePageTypeHook(badOutput);
    assert.equal(badOutput.output, 'nope');

    await beforeComposePageTypeHook(undefined);
    assert.equal(warnings.length, 0);

    const throwing = { output: [...DEFAULT_ORDER] };
    Object.defineProperty(throwing, 'data', { get() { throw new Error('boom'); }, enumerable: true });
    await beforeComposePageTypeHook(throwing);
    assert.deepEqual(throwing.output, DEFAULT_ORDER);
    assert.equal(warnings.length, 1);
    assert.match(warnings[0], /boom/);

    const sections = objectSections();
    sections.relations = { get content() { throw new Error('bad relations'); } };
    const inner = { data: { name: 'DesProject', sections }, output: [...DEFAULT_ORDER] };
    await beforeComposePageTypeHook(inner);
    assert.deepEqual(inner.output, DEFAULT_ORDER);
    assert.equal(warnings.length, 2);
    assert.match(warnings[1], /DesProject/);
  } finally {
    console.warn = warn;
  }
});

test('formatter module re-exports the Docusaurus MDX formatter and adds the hook', () => {
  assert.equal(typeof mdx.createMDXFormatter, 'function');
  assert.equal(typeof mdx.formatMDXBadge, 'function');
  assert.equal(typeof mdx.beforeGenerateIndexMetafileHook, 'function');
  assert.equal(typeof mdx.mdxDeclaration, 'string');
  assert.equal(mdx.beforeComposePageTypeHook, beforeComposePageTypeHook);
});

test('operation page without arguments is not split', () => {
  const sections = { code: { content: 'c' }, metadata: { content: [{ title: 'Type', content: 't', level: 3 }] } };
  assert.deepEqual(reorderTypePageSections(sections, ['description', 'code', 'metadata']), ['description', 'code', 'metadata:Type']);
});
