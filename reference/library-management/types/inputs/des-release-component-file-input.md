---
title: "DesReleaseComponentFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseComponentFileInput

Input for releasing component file.

### Member Of

[`DesReleaseComponentDatasheetInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-datasheet-input.md) input · [`DesReleaseComponentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-input.md) input

```graphql
input DesReleaseComponentFileInput {
  fileId: String!
  relativePath: String!
}
```

### Fields

#### `DesReleaseComponentFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file identifier.

#### `DesReleaseComponentFileInput.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative path of the source file.
