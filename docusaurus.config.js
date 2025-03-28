// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'S1nScripts',
  tagline: 'S1nScripts Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.s1nscripts.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'S1nScripts', // Usually your GitHub org/user name.
  projectName: 'docs.s1nscripts.com', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic', /** @type {import('@docusaurus/preset-classic').Options} */ (
        { 
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          googleTagManager: {
            containerId: 'G-4FVP30D7HK',
          },
          gtag: {
            trackingID: 'G-4FVP30D7HK',
            anonymizeIP: true,
          },
        }
      ),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'S1nScripts',
        logo: {
          alt: 'S1nScripts Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Webstore',
            href: 'https://store.s1nscripts.com/',
            position: 'left'
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/JnY9ty4z5Y',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs/intro/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/JnY9ty4z5Y',
              },
              {
                label: 'Tebex',
                href: 'https://store.s1nscripts.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} S1nScripts, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['lua'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'NJFV3GU34E',

        // Public API key: it is safe to commit it
        apiKey: '490e49f1d58a5684f355c81559479484',

        indexName: 'first_index',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // TODO: problem: the results for /docs are redirecting to /, so I comment this object   
      // replaceSearchResultPathname: {
          // from: '/docs/', // or as RegExp: /\/docs\//
         // to: '/',
       // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      }
    }),
};

module.exports = config;
