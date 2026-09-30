---
title: "desPartUploadPartFileColumns"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-part-file-columns"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartUploadPartFileColumns

Reads column headers from a previously uploaded CSV or Excel file. EXPERIMENTAL: this query may change or be removed without notice.

```graphql
desPartUploadPartFileColumns(
  fileId: String!
  fileName: String!
): DesPartUploadPartFileColumnsPayload!
```

### Arguments

#### `desPartUploadPartFileColumns.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

File identifier to read columns from.

#### `desPartUploadPartFileColumns.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

File name to read columns from.

### Type

#### [`DesPartUploadPartFileColumnsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-part-file-columns-payload.md) object library-management

Payload produced when reading columns from an uploaded file.
