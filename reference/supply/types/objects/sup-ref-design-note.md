---
title: "SupRefDesignNote"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-note"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignNote

Represents a note attached to a reference design file.

### Member Of

[`SupRefDesignFile`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-file.md) object

```graphql
type SupRefDesignNote {
  attachment: SupDocument
  description: String
  objectId: String
  points: [SupRefPoint2D]!
  title: String!
}
```

### Fields

#### `attachment` · [`SupDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-document.md) object

The attached resource for the note.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The note description.

#### `objectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The note identifier.

#### `points` · [`[SupRefPoint2D]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-point-2-d.md) non-null object

Points representing the position of the note attached on the design file.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The note title.
