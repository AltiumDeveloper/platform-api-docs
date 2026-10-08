---
title: "DesPartUploadLibraryPartsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartsInput

Input for uploading custom library parts (Custom Part Provider mode). Column mapping is required.

### Member Of

[`desPartUploadLibraryParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-library-parts.md) mutation

```graphql
input DesPartUploadLibraryPartsInput {
  columnMapping: DesPartUploadLibraryPartsColumnMappingInput!
  fileId: String!
  fileName: String!
}
```

### Fields

#### `columnMapping` · [`DesPartUploadLibraryPartsColumnMappingInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-column-mapping-input.md) non-null input

Column mapping. Maps file column headers to part fields.

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

File identifier with parts for upload.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

File name with parts for upload.
