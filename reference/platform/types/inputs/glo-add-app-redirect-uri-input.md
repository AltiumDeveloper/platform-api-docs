---
title: "GloAddAppRedirectUriInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-add-app-redirect-uri-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAddAppRedirectUriInput

### Member Of

[`gloAddAppRedirectUri`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-redirect-uri.md) mutation

```graphql
input GloAddAppRedirectUriInput {
  id: ID!
  redirectUri: String!
}
```

### Fields

#### `GloAddAppRedirectUriInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.

#### `GloAddAppRedirectUriInput.redirectUri` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The new redirect URI to be added to the App.
