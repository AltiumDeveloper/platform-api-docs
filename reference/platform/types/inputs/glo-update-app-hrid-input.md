---
title: "GloUpdateAppHridInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-update-app-hrid-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUpdateAppHridInput

### Member Of

[`gloUpdateAppHrid`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-hrid.md) mutation

```graphql
input GloUpdateAppHridInput {
  hrid: String!
  id: ID!
}
```

### Fields

#### `GloUpdateAppHridInput.hrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The new human-readable identifier for the App.

#### `GloUpdateAppHridInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.
