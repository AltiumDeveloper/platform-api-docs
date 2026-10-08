---
title: "GloRemoveAppClientSecretInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-app-client-secret-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveAppClientSecretInput

### Member Of

[`gloRemoveAppClientSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-client-secret.md) mutation

```graphql
input GloRemoveAppClientSecretInput {
  clientSecret: String!
  id: ID!
}
```

### Fields

#### `clientSecret` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The client secret to be removed from the App.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App to be updated.
