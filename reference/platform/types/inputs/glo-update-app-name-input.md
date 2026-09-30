---
title: "GloUpdateAppNameInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-update-app-name-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUpdateAppNameInput

### Member Of

[`gloUpdateAppName`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-name.md) mutation

```graphql
input GloUpdateAppNameInput {
  id: ID!
  name: String!
}
```

### Fields

#### `GloUpdateAppNameInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.

#### `GloUpdateAppNameInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The new name for the App.
