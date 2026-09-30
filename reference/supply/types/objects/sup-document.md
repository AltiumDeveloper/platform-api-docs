---
title: "SupDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-document"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupDocument

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object · [`SupRefDesignNote`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-note.md) object

```graphql
type SupDocument {
  createdAt: DateTime
  creditString: String!
  creditUrl: String!
  mimeType: String!
  name: String!
  pageCount: Int!
  url: String!
}
```

### Fields

#### `SupDocument.createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SupDocument.creditString` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupDocument.creditUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupDocument.mimeType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupDocument.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupDocument.pageCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `SupDocument.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
