---
title: "DesPartCreateTagInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-create-tag-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCreateTagInput

Represents the input for creating a part tag.

### Member Of

[`desPartCreateTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-create-tag.md) mutation

```graphql
input DesPartCreateTagInput {
  name: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the tag. Must not be taken by another tag of the workspace.
