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

#### `commentThreads` · [`[DesCommentThread!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) non-null object Collaboration

The list of all comment threads related to this schematic.

#### `designItems` · [`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object

The list of all part instances used in this schematic grouped into pages.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input

#### `documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this schematic.

#### `documentName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The document file name.
