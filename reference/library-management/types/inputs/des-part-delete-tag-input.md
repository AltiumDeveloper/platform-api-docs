---
title: "DesPartDeleteTagInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-delete-tag-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartDeleteTagInput

Represents the input for deleting a part tag.

### Member Of

[`desPartDeleteTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-delete-tag.md) mutation

```graphql
input DesPartDeleteTagInput {
  tagId: String!
}
```

### Fields

#### `tagId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the tag to delete.
