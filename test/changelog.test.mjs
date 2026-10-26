import { test } from 'node:test';
import assert from 'node:assert/strict';
import { htmlToChangelog } from '../scripts/apidocs/lib/changelog.mjs';

const wrap = (body) => `<html><body><ul>${body}</ul></body></html>`;

test('htmlToChangelog converts + entries to cl-add divs', async () => {
  const result = await htmlToChangelog(wrap('<li>+ Added field</li>'));
  assert.ok(result.includes('<div className="cl-entry"><span className="cl-add">+</span> Added field</div>'), result);
});

test('htmlToChangelog converts − entries to cl-remove divs', async () => {
  const result = await htmlToChangelog(wrap('<li>− Removed field</li>'));
  assert.ok(result.includes('<div className="cl-entry"><span className="cl-remove">−</span> Removed field</div>'), result);
});

test('htmlToChangelog converts Δ entries to cl-change divs', async () => {
  const result = await htmlToChangelog(wrap('<li>Δ Changed field</li>'));
  assert.ok(result.includes('<div className="cl-entry"><span className="cl-change">Δ</span> Changed field</div>'), result);
});

test('htmlToChangelog escapes { and } in entry text', async () => {
  const result = await htmlToChangelog(wrap('<li>+ Added SomeType{field}</li>'));
  assert.ok(!result.includes('{field}'), `raw { should be escaped: ${result}`);
  assert.ok(result.includes('&#123;field&#125;'), result);
});

test('htmlToChangelog strips tracker anchor links from headings', async () => {
  const html = `<html><body><h3><a href="#entry-2026-10-24">2026-10-24</a></h3><p><a href="#year-2026">2026</a></p></body></html>`;
  const result = await htmlToChangelog(html);
  assert.ok(!result.includes('#entry-'), result);
  assert.ok(!result.includes('#year-'), result);
  assert.ok(result.includes('2026-10-24'), result);
});
