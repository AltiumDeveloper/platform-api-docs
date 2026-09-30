---
title: "SysEsdCreateDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-create-document-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdCreateDocumentInput

Input for creating a new ESD document.

### Member Of

[`sysEsdCreateDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-create-document.md) mutation

```graphql
input SysEsdCreateDocumentInput {
  folderId: String!
  name: String!
  sourceFlow: String
}
```

### Fields

#### `SysEsdCreateDocumentInput.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the folder in which the ESD document is created.

#### `SysEsdCreateDocumentInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the ESD document to create.

#### `SysEsdCreateDocumentInput.sourceFlow` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional identifier of the flow that initiated the document creation.
