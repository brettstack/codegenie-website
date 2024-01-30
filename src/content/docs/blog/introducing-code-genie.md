---
title: Introducing Code Genie 🧞‍♂️
date: 2024-31-01
excerpt: Today we’re excited to launch Code Genie — the FASTEST way to build software! With a single AI-powered command wish, Code Genie generates a custom Full Stack AWS Serverless Application based on your description. In under a minute!
authors:
  - brett
tags:
  - announcement
---

Today we're excited to launch Code Genie -- the FASTEST way to build software! 🚀

With a single ~~AI-powered command~~ wish, Code Genie generates a custom Full Stack AWS Serverless Application based on your description. In under a minute! Try it out for yourself (no account required!):

```sh
npx @codegenie/cli generate --name "Wildlife Rescue" \
--description "An app that lets users upload photos, location, time, species and other information so that Wildlife Rescuers can get notified and respond to reports of injured wildlife in their area."
```

:::tip[Deploy 🚀]
You can include the `--deploy` flag to instantly deploy to AWS, or you can run `npm run init:dev` within the project directory.
:::

Projects include:

* A Next.js Web App hosted on AWS Amplify Hosting
* Serverless Express REST API on Lambda and API Gateway
* DynamoDB Database
* Cognito User Pools for Auth
* CDK for all AWS infrastructure
* Local Development
* Multi-environment support (dev, staging, production)
* Custom domain names for Web App and API
* Custom Emails
* CI/CD via GitHub Actions (WIP)
* Much more (and even more to come)

We can't wait to see what you build! Join us on [Discord](https://discord.gg/YJ9gQhheyn), and follow us on [Twitter](https://twitter.com/CodeGenieCodes) and [LinkedIn](https://www.linkedin.com/company/code-genie-codes) for support and announcements.