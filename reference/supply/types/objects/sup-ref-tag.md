---
title: "SupRefTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-tag"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefTag

Represents a tag for categorizing a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefTag {
  category: String!
  value: String!
}
```

### Fields

#### `SupRefTag.category` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The tag category name.

#### `SupRefTag.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The tag value.
