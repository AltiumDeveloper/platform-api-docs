// Integrity of the search index the build shipped (scripts/apidocs/search-check.mjs): the content-hashed file named by
// plugins/search-index.cjs exists once, matches its hash and the plain build/search-index.json byte for byte, and
// every record points at a built page and an existing anchor.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { KINDS } from '../../../src/search/engine.mjs';

const require = createRequire(import.meta.url);
const { hashedName } = require('../../../plugins/search-index.cjs');

const HASHED = /^search-index\.[0-9a-f]+\.json$/;
const ID_ATTR = /\sid="([^"]*)"/g;
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'" };

// build/-relative HTML file of a record URL (`/` → index.html, `/a/b` → a/b/index.html), and its decoded anchor.
export function pageTarget(url) {
  const [path, hash] = url.split('#');
  const route = path.replace(/^\/+|\/+$/g, '');
  return { file: route ? `${route}/index.html` : 'index.html', anchor: hash ? decodeURIComponent(hash) : null };
}

// Every `id="..."` of a page; a regex is enough (and much faster than parsing) for Docusaurus output.
export function htmlIds(html) {
  const decode = (value) => value.replace(/&(amp|lt|gt|quot|apos|#39);/g, (_, name) => ENTITIES[name]);
  return new Set([...html.matchAll(ID_ATTR)].map((match) => decode(match[1])));
}

// Problems of a parsed index. `readPage(file)` returns a page's HTML or null; each page is read once.
// Returns { records, pages, anchors, problems: [{ record, message }] }.
export function checkIndex(payload, { readPage }) {
  const problems = [];
  const report = (record, message) => problems.push({ record, message });
  const records = Array.isArray(payload?.records) ? payload.records : [];
  const contexts = Array.isArray(payload?.contexts) ? payload.contexts : [];
  if (!records.length) report(null, 'index has no records');

  const pages = new Map();
  const idsOf = (file) => {
    if (!pages.has(file)) {
      const html = readPage(file);
      pages.set(file, html === null ? null : htmlIds(html));
    }
    return pages.get(file);
  };
  let anchors = 0;
  records.forEach((record, index) => {
    if (record.i !== index) report(record, `id ${record.i} at position ${index}`);
    if (!Object.hasOwn(KINDS, record.k)) report(record, `unknown kind ${record.k}`);
    if (record.c !== undefined && !(Number.isInteger(record.c) && record.c >= 0 && record.c < contexts.length)) {
      report(record, `context index ${record.c} out of range (${contexts.length} contexts)`);
    }
    if (typeof record.u !== 'string' || !record.u.startsWith('/')) {
      report(record, `bad url ${record.u}`);
      return;
    }
    const { file, anchor } = pageTarget(record.u);
    const ids = idsOf(file);
    if (ids === null) {
      report(record, `no page build/${file}`);
      return;
    }
    if (anchor === null) return;
    anchors += 1;
    if (!ids.has(anchor)) report(record, `no id="${anchor}" in build/${file}`);
  });
  return { records: records.length, pages: pages.size, anchors, problems };
}

// Checks build/: the single hashed index, its name, the plain copy, then the records.
// Returns { file, records, pages, anchors, problems }.
export function runSearchCheck({ buildDir = 'build' } = {}) {
  if (!existsSync(buildDir)) throw new Error(`search:check: ${buildDir} not found; run npm run build first`);
  const fail = (message) => ({ file: null, records: 0, pages: 0, anchors: 0, problems: [{ record: null, message }] });
  const hashed = readdirSync(buildDir).filter((name) => HASHED.test(name));
  if (hashed.length === 0) return fail(`no ${buildDir}/search-index.<hash>.json; was static/search-index.json built before npm run build?`);
  if (hashed.length > 1) return fail(`more than one hashed index in ${buildDir}: ${hashed.join(', ')}`);

  const [file] = hashed;
  const bytes = readFileSync(join(buildDir, file));
  const problems = [];
  if (hashedName(bytes) !== file) problems.push({ record: null, message: `${file} does not match its content hash (${hashedName(bytes)})` });
  const plain = join(buildDir, 'search-index.json');
  if (!existsSync(plain)) problems.push({ record: null, message: `${plain} missing` });
  else if (!readFileSync(plain).equals(bytes)) problems.push({ record: null, message: `${plain} differs from ${file}` });

  let payload;
  try {
    payload = JSON.parse(bytes.toString('utf8'));
  } catch (error) {
    return { file, records: 0, pages: 0, anchors: 0, problems: [...problems, { record: null, message: `${file} is not JSON: ${error.message}` }] };
  }
  const readPage = (page) => {
    const path = join(buildDir, page);
    return existsSync(path) ? readFileSync(path, 'utf8') : null;
  };
  const result = checkIndex(payload, { readPage });
  return { file, ...result, problems: [...problems, ...result.problems] };
}
