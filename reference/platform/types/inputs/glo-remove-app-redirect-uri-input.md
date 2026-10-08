---
title: "GloRemoveAppRedirectUriInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-app-redirect-uri-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveAppRedirectUriInput

### Member Of

[`gloRemoveAppRedirectUri`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-redirect-uri.md) mutation

```graphql
input GloRemoveAppRedirectUriInput {
  id: ID!
  redirectUri: String!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App to be updated.

#### `redirectUri` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The redirect URI to be removed from the App.
