---
title: "GloRemoveAppScopeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-app-scope-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveAppScopeInput

### Member Of

[`gloRemoveAppScope`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-scope.md) mutation

```graphql
input GloRemoveAppScopeInput {
  id: ID!
  scope: String!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App to be updated.

#### `scope` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The scope to be removed from the App.
