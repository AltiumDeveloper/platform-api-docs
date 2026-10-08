---
title: "SupRefDesignFile"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-file"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignFile

Represents a design file belonging to a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefDesignFile {
  extension: String!
  name: String!
  notes: [SupRefDesignNote]!
  refDesignFileId: String!
  type: String!
  url: String!
}
```

### Fields

#### `extension` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file extension.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file name.

#### `notes` · [`[SupRefDesignNote]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-note.md) non-null object

Notes attached to the design file.

#### `refDesignFileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file identifier.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file type.

#### `url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file download URL.
