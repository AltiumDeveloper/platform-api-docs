---
title: "GloUpdateAppDescriptionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-update-app-description-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUpdateAppDescriptionInput

### Member Of

[`gloUpdateAppDescription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-description.md) mutation

```graphql
input GloUpdateAppDescriptionInput {
  description: String!
  id: ID!
}
```

### Fields

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The new description for the App.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App to be updated.
