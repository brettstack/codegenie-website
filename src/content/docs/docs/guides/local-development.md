---
title: Local Development
description: How to develop locally
---

## Run the UI Locally

After deploying to your AWS account, start the UI locally by running:

```sh
npm run start:ui
```

Visit localhost:3001 to view your local web app. After making changes, you can run `npm run deploy` to deploy to your AWS account.

## Run the UI and API Locally

If you want to run your UI against a local version of your API, instead run these two commands in separate terminals:

```sh
npm run start:api
```

```sh
npm run start:ui:offline
```

Note that this will still use your other cloud resources (e.g. Database and Auth) but allows you to quickly iterate on your UI and API.

Visit localhost:3001 to view your local web app. After making changes, you can run `npm run deploy` to deploy to your AWS account.