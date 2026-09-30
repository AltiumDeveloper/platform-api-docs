---
title: "DesUpdateSymbolFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateSymbolFileInput

Input for updating a symbol file.

### Member Of

[`DesUpdateSymbolInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-input.md) input

```graphql
input DesUpdateSymbolFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `DesUpdateSymbolFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file identifier (typically a \*SchLib\* file).

#### `DesUpdateSymbolFileInput.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative path of the source file (typically \*Released/filename.SchLib\*).
