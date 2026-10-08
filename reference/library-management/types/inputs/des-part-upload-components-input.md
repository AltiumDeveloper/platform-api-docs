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

#### `columnMapping` · [`DesPartUploadComponentsColumnMappingInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-column-mapping-input.md) non-null input

Column mapping.

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

File identifier with parts for upload.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

File name with parts for upload.

#### `partChoiceUpdateMode` · [`DesPartPartChoiceUpdateMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-part-part-choice-update-mode.md) non-null enum

Specifies how existing part choices are handled during upload.
