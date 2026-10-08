---
title: "SysEsdDeleteDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-delete-document-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdDeleteDocumentInput

Input for deleting an ESD document.

### Member Of

[`sysEsdDeleteDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-delete-document.md) mutation

```graphql
input SysEsdDeleteDocumentInput {
  id: ID!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the ESD document to delete.
