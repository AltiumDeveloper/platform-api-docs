// @ts-check
const { existsSync, readFileSync } = require('node:fs');
const { pathToFileURL } = require('node:url');
const { GlobExcludeDefault } = require('@docusaurus/utils');
const { themes } = require('prism-react-renderer');
const { buildDecorators } = require('./scripts/apidocs/decorators.cjs');
const { sidebarItemsGenerator } = require('./scripts/apidocs/sidebar.cjs');

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);
const cdmIndex = readJson('./.schema/cdm-index.json', {});
const redirects = readJson('./.schema/redirects.json', []);

// Local-only planning notes live in docs/superpowers; exclude them only when present so CI builds don't embed the name.
const docsExclude = existsSync('./docs/superpowers') ? [...GlobExcludeDefault, 'superpowers/**'] : GlobExcludeDefault;

const DEVELOPER_CENTER = 'https://developer.altium.com/';
const DEVELOPER_CENTER_DOCS = 'https://www.altium.com/documentation/altium-developer-center';
const CDM_DOCS = 'https://altiumdeveloper.github.io/cdm/';
const REPO = 'https://github.com/AltiumDeveloper/platform-api-docs';

// Fixture builds (smoke test) only contain some BCs, so landing-page links to the others are expected to break there.
const brokenLinks = process.env.APIDOCS_SCHEMA_FILE ? 'warn' : 'throw';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Altium 365 API',
  tagline: 'GraphQL reference for the Altium 365 API, organised by bounded context',
  url: 'https://altiumdeveloper.github.io',
  baseUrl: '/platform-api-docs/',
  organizationName: 'AltiumDeveloper',
  projectName: 'platform-api-docs',
  favicon: 'img/favicon.svg',
  onBrokenLinks: brokenLinks,
  markdown: {
    hooks: { onBrokenMarkdownLinks: brokenLinks },
  },
  plugins: [
    [
      '@graphql-markdown/docusaurus',
      {
        schema: './.schema/annotated.graphql',
        rootPath: './docs',
        baseURL: 'reference',
        homepage: false,
        loaders: { GraphQLFileLoader: '@graphql-tools/graphql-file-loader' },
        groupByDirective: { directive: 'doc', field: 'category', fallback: 'Common' },
        docOptions: {
          index: false,
          frontMatter: { hide_table_of_contents: true, pagination_next: null, pagination_prev: null },
        },
        printTypeOptions: {
          deprecated: 'group',
          parentTypePrefix: false,
          typeBadges: true,
          relatedTypeSection: true,
        },
        decorators: buildDecorators({ cdmIndex }),
        // Stock Docusaurus formatter plus beforeComposePageTypeHook (type-page section order).
        formatter: pathToFileURL(require.resolve('./scripts/apidocs/mdx.cjs')).href,
      },
    ],
    ['@docusaurus/plugin-client-redirects', { redirects }],
    // Search: src/theme/SearchBar over static/search-index.json (npm run search:index), also published under a
    // content-hashed name (usePluginData('search-index').file).
    './plugins/search-index.cjs',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js', sidebarItemsGenerator, exclude: docsExclude },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'Altium 365 API - Reference Documentation',
        logo: { alt: 'Altium', src: 'img/altium-logo.svg', width: 90, height: 20 },
        items: [
          // Sibling sites first, in the same order as the CDM site's header: each links to the other
          { href: CDM_DOCS, label: 'Common Data Model', position: 'right' },
          { href: DEVELOPER_CENTER, label: 'Developer Center', position: 'right' },
          { href: REPO, label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Altium',
            items: [
              { label: 'Developer Center', href: DEVELOPER_CENTER },
              { label: 'Developer Center documentation', href: DEVELOPER_CENTER_DOCS },
              { label: 'Common Data Model', href: CDM_DOCS },
            ],
          },
          {
            title: 'This site',
            items: [
              { label: 'Schema (SDL)', href: 'pathname:///schema.graphql' },
              { label: 'For AI assistants (llms.txt)', href: 'pathname:///llms.txt' },
              { label: 'Source on GitHub', href: REPO },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Altium.`,
      },
      prism: { theme: themes.github, darkTheme: themes.oneDark },
    }),
};

module.exports = config;
