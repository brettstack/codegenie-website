---
title: Getting Started
description: Get Started with Code Genie
---

This guide will walk you through using the example app to generat your first application with Code Genie, deploy it to your AWS Account, and run it locally for development.

## Prerequisites

Before continuing you'll need an [AWS Account](https://aws.amazon.com/resources/create-account/) and a developer environment with:

- [Node.js 20+](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- [AWS CLI](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html)

## Download and generate example app

:::caution[Coming soon]
Self-service project generation is still under development. Until then, contact brett@codegenie.codes to discuss your project requirements.
:::

<!-- *Coming Soon:* Download and unzip example Code Genie App Definition

```sh
Curl + unzip + CD commands
```

```sh
npm i -g @codegenie/generator
npm run @codegenie/generator generate
``` -->

## Setup AWS Credentials Profile

Open `~/.aws/credentials` and add a profile entry called `code-genie-example_dev`. You can either copy-paste credentials from an existing developer profile, or create new credentials from the AWS IAM Console.

```
// ~/.aws/credentials
[code-genie-example_dev]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX/XXXXXX
```

:::note
The profile name should be a `kebab-cased` version of the application name, followed by the environment name shorthand (`_dev`, `_staging`, `_prod`). See the `profile` values in `packages/cdk/cdk.json` for the exact values.

The example app is called "Code Genie Example" and we'll be deploying to our developer environment ("dev" for shorthand), so we create a profile called `code-genie-example_dev`.

For deploying to staging and production, create profiles with the `_staging` and `_prod` suffixes. See [Deployments](./deployments) for more details.
:::

## Deploy developer instance

Install dependencies and deploy a developer instance to your AWS account by running:

```sh
npm i
npm run deploy:dev
npm run deploy:dev # Run deploy a second time during intial setup
npm run copy-outputs-to-dotenv
```

## Developing and deploying changes

After deploying to your developer AWS account, start the UI locally by running:

```sh
npm run start:ui
```

You can then visit localhost:3001 to view your local web app and begin making changes.

See [Local Development](./local-development) and [Deploying to staging and production](./deployments#deploying-to-staging-and-production) for more details.

## Next steps

The next step is up to you! If you want to play around with the example app and learn more about the generated source code: check out the [Project Walkthrough guides](../project-walkthrough/overview).

If you'd rather start developing your own application, head over to the [App Definition and Data Modeling guide](./data-modeling).

<!-- After you've finished modeling your application, you can then run the `npm run codegenie:generate` command again to generate the source code. -->
