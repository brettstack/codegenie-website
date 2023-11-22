---
title: Getting Started
description: Get Started with Code Genie
---

This guide will walk you through how to generate your first application with Code Genie, deploy it to your AWS Account, and run it locally for development.

## Prerequisites

- [AWS Account + CLI](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html)
- [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

## Download and generate example app

*Coming Soon:* Download and unzip example Code Genie App Definition

```
Curl + unzip + CD commands
```

*Coming Soon:* Self-service generation is still under development. Until then, contact brett@codegenie.codes with your data model to generate your project source code.

<!-- ```
npm i -g @codegenie/generator
npm run @codegenie/generator generate
``` -->

## Setup AWS Credentials Profile

Open `~/.aws/credentials` and add a profile entry called `code-genie-example_dev`. You can either copy-paste credentials from an existing developer profile, or create new credentials from the AWS IAM Console.

```
[code-genie-example_dev]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX/XXXXXX
```

## Deploy developer instance

Install dependencies and deploy a developer instance to your AWS account by running:

```
npm i
npm run deploy:dev
npm run deploy:dev # Run deploy a second time during intial setup
npm run copy-outputs-to-dotenv
```

## Developing and deploying changes

After deploying to your developer AWS account, start the UI locally by running:

```
npm run start:ui
```

You can then visit localhost:3001 to view your local web app and begin making changes.

See [Developing and deploying changes](./local-development.md) and [Deploying to staging and production](./deploying.md#deploying-to-staging-and-production) for more details.

## Next steps

The next step is up to you! If you want to play around with the example app and learn more about the generated source code: check out the [Project Walkthrough guides](../project-walkthrough/overview.mdx).

If you'd rather start developing your own application, head over to the [App Definition and Data Modeling guide](./data-modeling.md).

<!-- After you've finished modeling your application, you can then run the `npm run codegenie:generate` command again to generate the source code. -->
