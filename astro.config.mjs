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
  integrations: [react(), tailwind(), starlight({
    title: 'Code Genie',
    description: 'Full stack application generator',
    favicon: '/favicon.ico',
    logo: {
      src: './src/assets/images/code-genie-logo.webp'
    },
    social: {
      github: 'https://github.com/CodeGenieApp'
    },
    editLink: {
      baseUrl: 'https://github.com/CodeGenieApp/docs/edit/main/'
    },
    lastUpdated: true,
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Getting Started',
        link: '/docs/guides/getting-started'
      }]
    }, {
      label: 'Project Structure',
      items: [{
        label: 'Overview',
        link: '/docs/project-structure/overview'
      }, {
        label: 'UI/Frontend',
        link: '/docs/project-structure/ui-frontend'
      }, {
        label: 'API/Backend',
        link: '/docs/project-structure/api-backend'
      }, {
        label: 'Database',
        link: '/docs/project-structure/database'
      }, {
        label: 'Auth/Identity',
        link: '/docs/project-structure/auth-identity'
      }, {
        label: 'Cloud Infrastructure',
        link: '/docs/project-structure/cloud-infrastructure'
      }, {
        label: 'Deploying',
        link: '/docs/project-structure/deploying'
      }]
    }]
  }), sitemap(), prefetch({
    intentSelector: ["a[href^='/']", "a[href^='https://codegenie.codes']", "a[href^='https://www.codegenie.codes']"]
  }), robotsTxt()]
});