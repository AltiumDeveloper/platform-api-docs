---
title: "DesCreateFootprintFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateFootprintFileInput

Input for creating a footprint file.

### Member Of

[`DesCreateFootprintInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-input.md) input

```graphql
input DesCreateFootprintFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `DesCreateFootprintFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file identifier (typically a \*PcbLib\* file).

#### `DesCreateFootprintFileInput.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative path of the source file (typically \*Released/filename.PcbLib\*).
