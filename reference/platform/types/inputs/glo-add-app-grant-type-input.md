---
title: "GloAddAppGrantTypeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-add-app-grant-type-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAddAppGrantTypeInput

### Member Of

[`gloAddAppGrantType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-grant-type.md) mutation

```graphql
input GloAddAppGrantTypeInput {
  grantType: String!
  id: ID!
}
```

### Fields

#### `GloAddAppGrantTypeInput.grantType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The new grant type to be added to the App.

#### `GloAddAppGrantTypeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.
