import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';

// { and } inside JSX text content start expressions; escape them as HTML entities.
const escapeJsx = (text) => text.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

const clEntry = (icon, cls) => (_, text) =>
  `<div className="cl-entry"><span className="${cls}">${icon}</span> ${escapeJsx(text)}</div>`;

// Converts the tracker's changelog HTML to the Markdown body (without the MDX frontmatter wrapper).
// remark-stringify escapes leading + as \+; − is U+2212; Δ is U+0394.
export async function htmlToChangelog(html) {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify, { bullet: '-', fence: '`', fences: true })
    .process(html);

  return String(file)
    .replace(/\[([^\]]+)\]\(#(?:entry|year)-[^)]+\)/g, '$1')
    .replace(/^- \\\+\s+(.+)$/gm, clEntry('+', 'cl-add'))
    .replace(/^- −\s+(.+)$/gm,    clEntry('−', 'cl-remove'))
    .replace(/^- Δ\s+(.+)$/gm,    clEntry('Δ', 'cl-change'));
}
