---
title: "DesPartDocumentMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-document-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartDocumentMappingInput

Maps file columns to a document.

### Member Of

[`DesPartUploadLibraryPartsColumnMappingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-column-mapping-input.md) input

```graphql
input DesPartDocumentMappingInput {
  nameColumn: String
  urlColumn: String!
}
```

### Fields

#### `nameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the document name.

#### `urlColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the document URL.
