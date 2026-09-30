---
title: "SysLibUploadSoftwareLibraryInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-lib-upload-software-library-input"
bounded_context: "System Design"
kind: "inputs"
experimental: true
deprecated: false
---

# SysLibUploadSoftwareLibraryInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

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

#### `SysLibUploadSoftwareLibraryInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysLibUploadSoftwareLibraryInput.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysLibUploadSoftwareLibraryInput.libraryId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SysLibUploadSoftwareLibraryInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
