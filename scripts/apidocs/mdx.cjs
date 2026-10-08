// graphql-markdown `formatter` module: the stock Docusaurus MDX formatter plus our lifecycle hooks.
// graphql-markdown registers any `*Hook` export of the formatter module as an event handler.
const docusaurusMdx = require('@graphql-markdown/docusaurus/mdx');
const { beforeComposePageTypeHook } = require('./page-sections.cjs');

// Same component declarations as the stock formatter, except `Badge` also accepts `title` (hover text) and `href`
// (renders a router link): the bounded-context chips use both to say what they mean and lead to that context.
const mdxDeclaration = `import Link from '@docusaurus/Link'\n${docusaurusMdx.mdxDeclaration}`.replace(
  '<span className={props.class}>{props.text}</span>',
  '{props.href ? <Link className={props.class} to={props.href} title={props.title}>{props.text}</Link> : <span className={props.class} title={props.title}>{props.text}</span>}',
);

module.exports = { ...docusaurusMdx, mdxDeclaration, beforeComposePageTypeHook };
