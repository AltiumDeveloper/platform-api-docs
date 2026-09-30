---
title: "DesUpdateFootprintFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFootprintFileInput

Input for updating a footprint file.

### Member Of

[`DesUpdateFootprintInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-input.md) input

```graphql
input DesUpdateFootprintFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `DesUpdateFootprintFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file identifier (typically a \*PcbLib\* file).

#### `DesUpdateFootprintFileInput.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative path of the source file (typically \*Released/filename.PcbLib\*).
