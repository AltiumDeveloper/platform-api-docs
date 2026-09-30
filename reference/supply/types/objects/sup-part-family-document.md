---
title: "SupPartFamilyDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-document"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyDocument

`SupPartFamilyDocument` contains the details for the documentation provided for a Part Family. `url` contains a link to the given document. `updatedAt` is the time we last updated this document.

### Member Of

[`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilyDocument {
  description: String!
  type: SupPartFamilyDocumentType!
  updatedAt: DateTime!
  url: String!
}
```

### Fields

#### `SupPartFamilyDocument.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupPartFamilyDocument.type` · [`SupPartFamilyDocumentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-part-family-document-type.md) non-null enum supply

#### `SupPartFamilyDocument.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `SupPartFamilyDocument.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
