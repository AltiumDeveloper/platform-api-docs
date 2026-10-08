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

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the folder in which the ESD document is created.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the ESD document to create.

#### `sourceFlow` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional identifier of the flow that initiated the document creation.
