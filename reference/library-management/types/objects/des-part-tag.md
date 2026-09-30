---
title: "DesPartTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-tag"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartTag

Represents a tag that can be assigned to parts.

### Returned By

[`desPartTags`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-tags.md) query

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object · [`DesPartCreateTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-create-tag-payload.md) object

```graphql
type DesPartTag {
  isDeletable: Boolean!
  name: String!
  tagId: String!
}
```

### Fields

#### `DesPartTag.isDeletable` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the tag can be deleted. Tags the workspace reserves, such as \*Critical\*, cannot.

#### `DesPartTag.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the tag.

#### `DesPartTag.tagId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the tag.
