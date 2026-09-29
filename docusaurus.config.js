// @ts-check
const { existsSync, readFileSync } = require('node:fs');
const { themes } = require('prism-react-renderer');
const { buildDecorators } = require('./scripts/apidocs/decorators.cjs');

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);
const cdmIndex = readJson('./.schema/cdm-index.json', {});
const redirects = readJson('./.schema/redirects.json', []);

const DEVELOPER_CENTER = 'https://developer.altium.com/';
const DEVELOPER_CENTER_DOCS = 'https://www.altium.com/documentation/altium-developer-center';
const CDM_DOCS = 'https://altiumdeveloper.github.io/cdm/';
const REPO = 'https://github.com/AltiumDeveloper/platform-api-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Altium Platform API',
  tagline: 'GraphQL reference for the Altium Platform API, organised by bounded context',
  url: 'https://altiumdeveloper.github.io',
  baseUrl: '/platform-api-docs/',
  organizationName: 'AltiumDeveloper',
  projectName: 'platform-api-docs',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'warn' },
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
      },
    ],
    ['@docusaurus/plugin-client-redirects', { redirects }],
    ['@cmfcmf/docusaurus-search-local', { indexBlog: false }],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Altium Platform API',
        items: [
          { type: 'docSidebar', sidebarId: 'docs', label: 'Reference', position: 'left' },
          { href: DEVELOPER_CENTER, label: 'Developer Center', position: 'right' },
          { href: REPO, label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
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
              { label: 'Source on GitHub', href: REPO },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Altium.`,
      },
      prism: { theme: themes.github, darkTheme: themes.dracula },
    }),
};

module.exports = config;
