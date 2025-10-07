import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LLM from 0 to Hero 🦸🏻‍♂️',
  tagline: 'Corso intensivo per profili non-tecnici: diventa un eroe degli LLM in 3 giorni',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://andreadicagno.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/LLM-from-zero-to-hero/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andreadicagno', // Usually your GitHub org/user name.
  projectName: 'LLM-from-zero-to-hero', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Docs at the root instead of /docs
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          blogTitle: 'Annunci e Aggiornamenti',
          blogDescription: 'News e aggiornamenti del workshop',
          showReadingTime: true,
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Tutti gli annunci',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/styles/custom.css',
        },
        gtag: {
          // Google Analytics 4 Measurement ID
          // Per ottenerlo: https://analytics.google.com > Admin > Data Streams > [tuo stream]
          // Il Measurement ID ha formato: G-XXXXXXXXXX
          trackingID: 'G-K3M1PL4J57', // Workshop LLM Measurement ID
          anonymizeIP: true, // Anonimizza IP per conformità GDPR
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["it", "en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  themeConfig: {
    // Using workshop logo as social card
    image: 'img/new_logo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LLM from 0 to Hero',
      logo: {
        alt: 'LLM from 0 to Hero Logo',
        src: 'img/new_logo.png',
        width: 34,
        height: 34,
      },
      items: [
        {
          type: 'dropdown',
          label: 'Giorni',
          position: 'left',
          items: [
            {
              label: 'Giorno 1: Foundations',
              to: '/giorno-1-foundations',
            },
            {
              label: 'Giorno 2: Claude Features',
              to: '/giorno-2-advanced-features',
            },
            {
              label: 'Giorno 3: Claude Code',
              to: '/giorno-3-claude-code',
            },
          ],
        },
        {
          to: '/risorse',
          label: 'Risorse',
          position: 'left',
        },
        {to: '/blog', label: 'Annunci', position: 'left'},
        {
          href: 'https://github.com/andreadicagno/LLM-from-zero-to-hero',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Corso',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Risorse',
              to: '/risorse',
            },
          ],
        },
        {
          title: 'Giorni del Workshop',
          items: [
            {
              label: 'Giorno 1: Foundations',
              to: '/giorno-1-foundations',
            },
            {
              label: 'Giorno 2: Claude Features',
              to: '/giorno-2-advanced-features',
            },
            {
              label: 'Giorno 3: Claude Code',
              to: '/giorno-3-claude-code',
            },
          ],
        },
        {
          title: 'Collegamenti',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/andreadicagno/LLM-from-zero-to-hero',
            },
            {
              label: 'Claude.ai',
              href: 'https://claude.ai',
            },
            {
              label: 'Anthropic Docs',
              href: 'https://docs.anthropic.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LLM from 0 to Hero. Materiali didattici per uso educativo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
