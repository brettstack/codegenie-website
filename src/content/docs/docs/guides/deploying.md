---
title: Deploying
description: How to deploy
---

You can choose to either deploy manually from your local developer machine by running `npm run deploy:dev`, or deploy using CI/CD via GitHub Actions.


## Deploy developer instance

Install dependencies and deploy a developer instance to your AWS account by running:

```sh
npm i
npm run deploy:dev
npm run deploy:dev # Run deploy a second time during intial setup
npm run copy-outputs-to-dotenv
```

Note that the UI isn't deployed on the first run of the `deploy` command because it require several resources to exist first. This second run is required only during initial setup, and deploying future changes requires only running `npm run deploy` once.


## Deploying to staging and production

:::caution[Deploy using CI/CD]
It's recommended that you only deploy to **staging** and **production** via CI/CD after your app is live. However, deploying to these stages from your local environment is easier when you're first getting them set up, and can also be faster (though less safe) during an emergency.
:::

Deploying to staging and proudction is similar to deploying to dev. You'll first need to create your `staging` and `prod` AWS Credentials profiles in `~/.aws/credentials`:

```
//~/.aws/credentials
[code-genie-example_dev]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX/XXXXXX

[code-genie-example_staging]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX/XXXXXX

[code-genie-example_prod]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX/XXXXXX
```

Next, you can run one of the following commands to deploy to staging or prod:

```sh title="Deploy to staging"
npm run deploy:staging
```
```sh title="Deploy to production"
npm run deploy:prod
```

:::tip[Use separate AWS Accounts for each stage]
It's recommended to use separate AWS Accounts for each stage for security and stability reasons.
:::