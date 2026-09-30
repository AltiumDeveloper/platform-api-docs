---
title: "DesPartUploadComponentsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUploadComponentsInput

Input for uploading components with part choices.

### Member Of

[`desPartUploadComponents`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-components.md) mutation

```graphql
input DesPartUploadComponentsInput {
  columnMapping: DesPartUploadComponentsColumnMappingInput!
  fileId: String!
  fileName: String!
  partChoiceUpdateMode: DesPartPartChoiceUpdateMode!
}
```

### Fields

#### `DesPartUploadComponentsInput.columnMapping` · [`DesPartUploadComponentsColumnMappingInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-column-mapping-input.md) non-null input library-management

Column mapping.

#### `DesPartUploadComponentsInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

File identifier with parts for upload.

#### `DesPartUploadComponentsInput.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

File name with parts for upload.

#### `DesPartUploadComponentsInput.partChoiceUpdateMode` · [`DesPartPartChoiceUpdateMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-part-part-choice-update-mode.md) non-null enum library-management

Specifies how existing part choices are handled during upload.
