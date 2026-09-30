---
title: "DesSchematic"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-schematic"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSchematic

A schematic contains the design parts and logical connections.

### Member Of

[`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object · [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object

```graphql
type DesSchematic {
  commentThreads: [DesCommentThread!]!
  designItems(
    after: String
    before: String
    first: Int
    last: Int
    where: DesDesignItemFilterInput
  ): DesDesignItemConnection
  documentId: String!
  documentName: String!
}
```

### Fields

#### `DesSchematic.commentThreads` · [`[DesCommentThread!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) non-null object collaboration

The list of all comment threads related to this schematic.

#### `DesSchematic.designItems` · [`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object design

The list of all part instances used in this schematic grouped into pages.

##### `DesSchematic.designItems.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesSchematic.designItems.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesSchematic.designItems.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesSchematic.designItems.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesSchematic.designItems.where` · [`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input design

#### `DesSchematic.documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this schematic.

#### `DesSchematic.documentName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The document file name.
