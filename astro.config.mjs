import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightBlog from 'starlight-blog'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'
const description =
  'Generate Full Stack Serverless AWS Apps based on your description or data model. Projects include Next.js, React, Express, Lambda, API Gateway, Cognito Auth, DynamoDB, and more.'
const ogImage = 'https://codegenie.codes/og.jpg'

// https://astro.build/config
export default defineConfig({
  site: 'https://codegenie.codes',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  integrations: [
    react(),
    tailwind(),
    starlight({
      title: 'Code Genie',
      description,
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/images/code-genie-logo.webp',
        // replacesTitle: true
      },
      social: {
        github: 'https://github.com/CodeGenieApp',
        email: 'mailto:support@codegenie.codes',
        twitter: 'https://twitter.com/CodeGenieCodes',
        discord: 'https://discord.gg/YJ9gQhheyn',
        linkedin: 'https://www.linkedin.com/company/code-genie-codes',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: ogImage },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: ogImage },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/CodeGenieApp/docs/edit/main/',
      },
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      lastUpdated: true,
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Guides',
          items: [
            {
              label: 'Getting Started',
              link: '/docs/guides/getting-started',
            },
            {
              label: 'Deployments',
              link: '/docs/guides/deployments',
            },
            {
              label: 'Local Development',
              link: '/docs/guides/local-development',
            },
            {
              label: 'Send emails from custom domain',
              link: '/docs/guides/send-emails-from-custom-domain',
            },
          ],
        },
        {
          label: 'Project Walkthrough',
          items: [
            {
              label: 'Overview',
              link: '/docs/project-walkthrough/overview',
            },
            {
              label: 'CI/CD Pipeline',
              link: '/docs/project-walkthrough/ci-cd-pipeline',
              badge: {
                variant: 'tip',
                text: 'WIP',
              },
            },
            {
              label: 'Frontend',
              items: [
                {
                  label: 'Overview',
                  link: '/docs/project-walkthrough/frontend/overview',
                },
                {
                  label: 'Pages',
                  link: '/docs/project-walkthrough/frontend/pages',
                },
                {
                  label: 'Components',
                  link: '/docs/project-walkthrough/frontend/components',
                },
                {
                  label: 'Hooks',
                  link: '/docs/project-walkthrough/frontend/hooks',
                },
                {
                  label: 'Branding/Themes',
                  link: '/docs/project-walkthrough/frontend/branding-themes',
                },
              ],
            },
            {
              label: 'Backend',
              items: [
                {
                  label: 'Overview',
                  link: '/docs/project-walkthrough/backend/overview',
                },
                {
                  label: 'API',
                  link: '/docs/project-walkthrough/backend/api',
                },
                {
                  label: 'Database',
                  link: '/docs/project-walkthrough/backend/database',
                },
                {
                  label: 'Auth/Identity',
                  link: '/docs/project-walkthrough/backend/auth-identity',
                  badge: {
                    variant: 'tip',
                    text: 'WIP',
                  },
                },
                {
                  label: 'Cloud Infrastructure (IAC)',
                  link: '/docs/project-walkthrough/backend/cloud-infrastructure',
                  badge: {
                    variant: 'tip',
                    text: 'WIP',
                  },
                },
                {
                  label: 'Miscellaneous',
                  link: '/docs/project-walkthrough/miscellaneous',
                  badge: {
                    variant: 'tip',
                    text: 'WIP',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Spec',
          items: [
            {
              label: 'App Definition',
              link: '/docs/spec/app-definition',
            },
          ],
        },
      ],
      plugins: [
        starlightBlog({
          title: 'Blog',
          authors: {
            brett: {
              name: 'Brett Andrews',
              title: 'Founder, Code Genie',
              url: 'https://twitter.com/AWSBrett',
              picture: '/brett-amazon-badge-photo-profile-pic-square-128.webp',
            },
          },
        }),
      ],
    }),
    sitemap(),
    robotsTxt(),
  ],
})
