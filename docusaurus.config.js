// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "altium", // Usually your GitHub org/user name.
  projectName: "platform-api-docs", // Usually your repo name.
  plugins: [
    "@graphql-markdown/docusaurus",
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
        copyright: `Copyright © ${new Date().getFullYear()} My Website, Inc. Built with GraphQL-Markdown & Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
