---
title: "DesCreateDatasheetFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-datasheet-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateDatasheetFileInput

Input for creating a datasheet file.

### Member Of

[`DesCreateDatasheetInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-datasheet-input.md) input

```graphql
input DesCreateDatasheetFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `DesCreateDatasheetFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file identifier.

#### `DesCreateDatasheetFileInput.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative path of the source file (typically Released/filename.pdf).
