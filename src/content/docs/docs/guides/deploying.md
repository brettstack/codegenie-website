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

*Coming Soon:*