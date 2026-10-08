---
title: "DesCreateSymbolFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-symbol-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateSymbolFileInput

Input for creating a symbol file.

### Member Of

[`DesCreateSymbolInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-symbol-input.md) input

```graphql
input DesCreateSymbolFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Uploaded file identifier (typically a \*SchLib\* file).

#### `relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Relative path of the source file (typically \*Released/filename.SchLib\*).
