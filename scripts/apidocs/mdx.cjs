// graphql-markdown `formatter` module: the stock Docusaurus MDX formatter plus our lifecycle hooks.
// graphql-markdown registers any `*Hook` export of the formatter module as an event handler.
const docusaurusMdx = require('@graphql-markdown/docusaurus/mdx');
const { beforeComposePageTypeHook } = require('./page-sections.cjs');

module.exports = { ...docusaurusMdx, beforeComposePageTypeHook };
