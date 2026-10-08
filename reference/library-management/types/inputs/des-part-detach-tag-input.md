---
title: "DesPartDetachTagInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-detach-tag-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartDetachTagInput

Represents the input for unassigning a part tag from parts.

### Member Of

[`desPartDetachTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-detach-tag.md) mutation

```graphql
input DesPartDetachTagInput {
  partIds: [ID!]!
  tagId: String!
}
```

### Fields

#### `partIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifiers of the parts to unassign the tag from. Parts that do not have the tag are left as they are.

#### `tagId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the tag to unassign.
