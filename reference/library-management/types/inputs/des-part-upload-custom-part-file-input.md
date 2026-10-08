---
title: "DesPartUploadCustomPartFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-custom-part-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUploadCustomPartFileInput

Input for uploading a custom part file.

### Member Of

[`desPartUploadCustomPartDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-datasheet.md) mutation · [`desPartUploadCustomPartImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-image.md) mutation

```graphql
input DesPartUploadCustomPartFileInput {
  fileId: String!
  fileName: String!
}
```

### Fields

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Temporary file identifier.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Original file name.
