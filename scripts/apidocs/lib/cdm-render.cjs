// Markdown for CDM entities, shared by the type-page decorator and the BC overview pages.
const { escapeMDX } = require('@graphql-markdown/utils');

const escapeBrackets = (text) => text.replace(/[[\]]/g, '\\$&');
// The IRI is the canonical, resolvable identifier of a CDM class; the CDM site page is only a fallback.
// The IRI as visible text that is itself the (resolvable) link.
const iriLink = (iri) => `[${codeSpan(String(iri))}](${iri})`;
const entityLink = (entry) => `[${escapeBrackets(escapeMDX(entry.title))}](${entry.iri ?? entry.url})`;
// A backtick inside a single-backtick span would end it early: use a padded double-backtick span instead.
const codeSpan = (text) => (text.includes('`') ? `\`\` ${text} \`\`` : `\`${text}\``);

// `- <link><separator><description>` plus optional nested `- IRI: ...` and `- GRID: ...` bullets.
function entityItem(entry, { prefix = '', separator = ' — ', indent = '' } = {}) {
  let line = `${indent}- ${prefix}${entityLink(entry)}`;
  if (entry.description) line += `${separator}${escapeMDX(entry.description)}`;
  const lines = [line];
  if (entry.iri) lines.push(`${indent}  - IRI: ${iriLink(entry.iri)}`);
  if (entry.grid) lines.push(`${indent}  - GRID: ${codeSpan(String(entry.grid))}`);
  return lines;
}

// Type page: one bullet per entity, `- [Title](url) — Description`.
function renderCdmEntries(entries) {
  return entries.flatMap((entry) => entityItem(entry)).join('\n');
}

// BC overview table row: `| [`ApiType`](url) | [Title](iri)<br />`iri` |`. Several entities stack in the one cell.
function renderCdmTypeRow(typeLink, entries) {
  const cell = entries.map((entry) => {
    const link = entityLink(entry);
    return entry.iri ? `${link}<br />${iriLink(entry.iri)}` : link;
  });
  return `| ${typeLink} | ${cell.join('<br />')} |`;
}

module.exports = { renderCdmEntries, renderCdmTypeRow };
