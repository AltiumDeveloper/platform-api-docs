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

#### `SupRefDesignNote.attachment` · [`SupDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-document.md) object supply

The attached resource for the note.

#### `SupRefDesignNote.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The note description.

#### `SupRefDesignNote.objectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The note identifier.

#### `SupRefDesignNote.points` · [`[SupRefPoint2D]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-point-2-d.md) non-null object supply

Points representing the position of the note attached on the design file.

#### `SupRefDesignNote.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The note title.
