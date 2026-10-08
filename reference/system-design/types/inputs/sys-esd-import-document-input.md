---
title: "SysEsdImportDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-import-document-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdImportDocumentInput

Input for importing content into an existing ESD document.

### Member Of

[`sysEsdImportDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-import-document.md) mutation

```graphql
input SysEsdImportDocumentInput {
  esdDocumentJson: String!
  id: String!
}
```

### Fields

#### `esdDocumentJson` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Serialized JSON representation of the ESD document content to import.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the ESD document to import content into.
