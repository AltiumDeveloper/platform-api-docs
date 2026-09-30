---
title: "DesPartDocumentMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartDocumentMapping

Maps file columns to a document.

### Member Of

[`DesPartUploadLibraryPartsColumnMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-column-mapping.md) object

```graphql
type DesPartDocumentMapping {
  nameColumn: String
  urlColumn: String!
}
```

### Fields

#### `DesPartDocumentMapping.nameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the document name.

#### `DesPartDocumentMapping.urlColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Column header for the document URL.
