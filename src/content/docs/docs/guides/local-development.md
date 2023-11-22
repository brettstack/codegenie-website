---
title: Local Development
description: How to develop locally
---

## Developing and deploying changes

After deploying to your developer AWS account, start the UI locally by running:

```
npm run start:ui
```

If you want to run your UI against a local version of your API, instead run these two commands in separate terminals:

```
npm run start:api
```

```
npm run start:ui:offline
```

Note that this will still use your other cloud resources (e.g. Database and Auth) but allows you to quickly iterate on your UI and API.

Visit localhost:3001 to view your local web app. After making changes, you can run `npm run deploy` to deploy to your AWS account.