import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://codegenie.codes',
  integrations: [
    react(),
    tailwind(),
    starlight({
    title: 'Code Genie',
    description: 'Full stack application generator',
    favicon: '/favicon.ico',
    logo: {
      src: './src/assets/images/code-genie-logo.webp'
    },
    social: {
      github: 'https://github.com/CodeGenieApp',
    },
    editLink: {
      baseUrl: 'https://github.com/CodeGenieApp/docs/edit/main/'
    },
    lastUpdated: true,
    customCss: [
      './src/styles/starlight.css',
    ],
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Getting Started',
        link: '/docs/guides/getting-started',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Deploying',
        link: '/docs/guides/deploying',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Local Development',
        link: '/docs/guides/local-development',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }]
    }, {
      label: 'Project Walkthrough',
      items: [{
        label: 'Overview',
        link: '/docs/project-walkthrough/overview'
      }, {
        label: 'Frontend (UI)',
        link: '/docs/project-walkthrough/frontend-ui',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Backend (API)',
        link: '/docs/project-walkthrough/backend-api',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Database',
        link: '/docs/project-walkthrough/database',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Auth/Identity',
        link: '/docs/project-walkthrough/auth-identity',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Cloud Infrastructure (IAC)',
        link: '/docs/project-walkthrough/cloud-infrastructure',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }, {
        label: 'Miscellaneous',
        link: '/docs/project-walkthrough/miscellaneous',
        badge: {
          variant: 'tip',
          text: 'WIP'
        }
      }]
    }]
  }), sitemap(), prefetch({
    intentSelector: ["a[href^='/']", "a[href^='https://codegenie.codes']", "a[href^='https://www.codegenie.codes']"]
  }), robotsTxt()]
});