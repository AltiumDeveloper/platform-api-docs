---
title: "SupRefPoint2D"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-point-2-d"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefPoint2D

Represents a 2D point for a file note.

### Member Of

[`SupRefDesignNote`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-note.md) object

```graphql
type SupRefPoint2D {
  type: String!
  x: Float!
  y: Float!
}
```

### Fields

#### `SupRefPoint2D.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The point type.

#### `SupRefPoint2D.x` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The X coordinate.

#### `SupRefPoint2D.y` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The Y coordinate.
