---
title: "SysLibUploadSoftwareLibraryInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-lib-upload-software-library-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysLibUploadSoftwareLibraryInput

### Member Of

[`sysLibUploadSoftwareLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-lib-upload-software-library.md) mutation

```graphql
input SysLibUploadSoftwareLibraryInput {
  fileId: String!
  fileName: String!
  libraryId: ID
  name: String!
}
```

### Fields

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `libraryId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
