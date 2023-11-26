import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
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
    starlightBlog({
      title: 'Code Genie',
      authors: {
        brett: {
          name: 'Brett Andrews',
          title: 'Founder, Code Genie',
          url: 'https://twitter.com/AWSBrett',
          picture: '/brett-amazon-badge-photo-profile-pic-square-128.webp'
        },
      },
    }),
    starlight({
      title: 'Code Genie',
      description: 'Full stack application generator',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/images/code-genie-logo.webp'
      },
      social: {
        github: 'https://github.com/CodeGenieApp',
        slack: 'https://join.slack.com/t/code-genie-workspace/shared_invite/zt-275f7ud06-r3MZaDVYaIi4DXe6f_ahMQ',
        email: 'mailto:support@codegenie.codes',
        twitter: 'https://twitter.com/AWSbrett'
      },
      editLink: {
        baseUrl: 'https://github.com/CodeGenieApp/docs/edit/main/'
      },
      lastUpdated: true,
      customCss: [
        './src/styles/starlight.css',
      ],
      components: {
        MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
        Sidebar: 'starlight-blog/overrides/Sidebar.astro',
        ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
      },
      sidebar: [{
        label: 'Guides',
        items: [{
          label: 'Getting Started',
          link: '/docs/guides/getting-started',
        }, {
          label: 'Define an Application',
          link: '/docs/guides/define-an-application',
          badge: {
            variant: 'tip',
            text: 'WIP'
          }
        }, {
          label: 'Deploying',
          link: '/docs/guides/deploying'
        }, {
          label: 'Local Development',
          link: '/docs/guides/local-development'
        }]
      }, {
        label: 'Project Walkthrough',
        items: [{
          label: 'Overview',
          link: '/docs/project-walkthrough/overview'
        }, {
          label: 'Frontend (UI)',
          link: '/docs/project-walkthrough/frontend-ui'
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
          label: 'CI/CD Pipeline',
          link: '/docs/project-walkthrough/ci-cd-pipeline',
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
      },
      {
        label: 'Spec',
        items: [{
          label: 'App Definition',
          link: '/docs/spec/app-definition',
          badge: {
            variant: 'tip',
            text: 'WIP'
          }
        }]
      }]
    }),
    sitemap(),
    prefetch({
      intentSelector: ["a[href^='/']", "a[href^='https://codegenie.codes']", "a[href^='https://www.codegenie.codes']"]
    }),
    robotsTxt()
  ]
});