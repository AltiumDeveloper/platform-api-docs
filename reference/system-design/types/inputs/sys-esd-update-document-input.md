---
title: "SysEsdUpdateDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-update-document-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdUpdateDocumentInput

Input for updating an existing ESD document.

### Member Of

[`sysEsdUpdateDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-update-document.md) mutation

```graphql
input SysEsdUpdateDocumentInput {
  folderId: String!
  id: ID!
  name: String!
}
```

### Fields

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Not used.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the ESD document to update.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New display name of the ESD document.
