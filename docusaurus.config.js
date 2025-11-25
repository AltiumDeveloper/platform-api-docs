// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { directiveDescriptor, directiveTag } = require("@graphql-markdown/helpers");
const { getTypeDirectiveValues } = require("@graphql-markdown/graphql");

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github,
  darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Platform API documentation",
  tagline: "Altium Platform",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/platform-api-docs/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "altium", // Usually your GitHub org/user name.
  projectName: "platform-api-docs", // Usually your repo name.
  plugins: [
    [
      "@graphql-markdown/docusaurus",
      /** @type {import('@graphql-markdown/types').ConfigOptions} */
      {
        schema: 'https://usw2.dev-365.altium.com/napi/gateway/graphql',
        rootPath: './docs',
        loaders: {
          UrlLoader: {
            module: '@graphql-tools/url-loader'
          },
        },
        baseURL: '.',
        homepage: 'static/index.md',
        docOptions: {
          index: true,
          frontMatter: {
            hide_table_of_contents: true,
            pagination_next: null,
            pagination_prev: null
          }
        },
        printTypeOptions: {
          exampleSection: true,
          parentTypePrefix: false,
          relatedTypeSection: false,
          typeBadges: true,
        }
      }
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexBlog: false
      }
    ],
  ], // See .graphqlrc for configuration
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        }
      })
    ]
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      // set slug to be the exact name of the schema element (type, query, etc.)
      result.frontMatter.id = result.frontMatter.title
      return result;
    },
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Platform API",
        logo: {
          alt: "graphql-markdown",
          src: "img/graphql-markdown.svg"
        },
        items: [
          {
            href: "https://github.com/graphql-markdown/graphql-markdown",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "light",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with GraphQL-Markdown & Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
