---
title: "DesPartAttachTagInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-attach-tag-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartAttachTagInput

Represents the input for assigning a part tag to parts.

### Member Of

[`desPartAttachTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-attach-tag.md) mutation

```graphql
input DesPartAttachTagInput {
  partIds: [ID!]!
  tagId: String!
}
```

### Fields

#### `partIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifiers of the parts to assign the tag to. Parts that already have the tag are left as they are.

#### `tagId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the tag to assign.
