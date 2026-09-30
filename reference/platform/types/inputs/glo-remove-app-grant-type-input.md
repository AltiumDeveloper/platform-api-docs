---
title: "GloRemoveAppGrantTypeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-app-grant-type-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveAppGrantTypeInput

### Member Of

[`gloRemoveAppGrantType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-grant-type.md) mutation

```graphql
input GloRemoveAppGrantTypeInput {
  grantType: String!
  id: ID!
}
```

### Fields

#### `GloRemoveAppGrantTypeInput.grantType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The grant type to be removed from the App.

#### `GloRemoveAppGrantTypeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.
