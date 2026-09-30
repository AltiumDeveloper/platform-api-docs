// Markdown for CDM entities, shared by the type-page decorator and the BC overview pages.
const { escapeMDX } = require('@graphql-markdown/utils');

const escapeBrackets = (text) => text.replace(/[[\]]/g, '\\$&');
const entityLink = (entry) => `[${escapeBrackets(escapeMDX(entry.title))}](${entry.url})`;
// A backtick inside a single-backtick span would end it early: use a padded double-backtick span instead.
const codeSpan = (text) => (text.includes('`') ? `\`\` ${text} \`\`` : `\`${text}\``);

// `- <link><separator><description>` plus an optional nested `- GRID: ...` bullet.
function entityItem(entry, { prefix = '', separator = ' — ', indent = '' } = {}) {
  let line = `${indent}- ${prefix}${entityLink(entry)}`;
  if (entry.description) line += `${separator}${escapeMDX(entry.description)}`;
  const lines = [line];
  if (entry.grid) lines.push(`${indent}  - GRID: ${codeSpan(String(entry.grid))}`);
  return lines;
}

// Type page: one bullet per entity, `- [Title](url) — Description`.
function renderCdmEntries(entries) {
  return entries.flatMap((entry) => entityItem(entry)).join('\n');
}

// BC overview: `- [`ApiType`](url) — [Title](url): Description`; several entities are nested under the type.
function renderCdmTypeItem(typeLink, entries) {
  if (entries.length === 1) return entityItem(entries[0], { prefix: `${typeLink} — `, separator: ': ' }).join('\n');
  return [`- ${typeLink}`, ...entries.flatMap((entry) => entityItem(entry, { separator: ': ', indent: '  ' }))].join('\n');
}

module.exports = { renderCdmEntries, renderCdmTypeItem };
