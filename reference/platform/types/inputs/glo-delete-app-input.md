---
title: "GloDeleteAppInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-delete-app-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloDeleteAppInput

### Member Of

[`gloDeleteApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-delete-app.md) mutation

```graphql
input GloDeleteAppInput {
  id: ID!
}
```

### Fields

#### `GloDeleteAppInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be deleted.
