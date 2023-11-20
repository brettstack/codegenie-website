---
title: Project Structure - UI, Frontend
description: Deep-dive of the UI
---

Code Genie projects include a Single Page Application (SPA) that utilizes the following core technologies:

* React
* Next.js - Enables simple bundling, routing, and other benefits when building React applications
* Ant Design - A powerful, flexible, and stylable component library
* React Query - Simplifies state management when making API calls
* AWS Amplify Client Library - Provides client side integration for Cognito Auth
* AWS Amplify Hosting - Hosts our web app

## Commands

* `npm run dev` - Runs the UI locally
* `npm run dev:offline` - Runs the UI locally and points it at a locally running API

## Branding and themes

You can specify a primary brand color and logo in your application definition Dark and Light themes are included out-of-the-box. 