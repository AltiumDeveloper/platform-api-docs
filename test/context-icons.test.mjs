import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('every bounded context has a colour and icon rule (.bc-<slug>) in custom.css', () => {
  const css = read('../src/css/custom.css');
  const { contexts } = parse(read('../config/context-map.yaml'));
  for (const { id } of contexts) {
    const rule = new RegExp(`\\.bc-${id}\\s*\\{[^}]*--bc-bg:\\s*#[0-9a-f]{6};[^}]*--bc-img:\\s*url\\("data:image/svg\\+xml,`);
    assert.match(css, rule, `missing .bc-${id} icon rule in src/css/custom.css`);
  }
});
