---
title: "GloAddAppScopeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-add-app-scope-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAddAppScopeInput

### Member Of

[`gloAddAppScope`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-scope.md) mutation

```graphql
input GloAddAppScopeInput {
  id: ID!
  scope: String!
}
```

### Fields

#### `GloAddAppScopeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be updated.

#### `GloAddAppScopeInput.scope` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The new scope to be added to the App.
