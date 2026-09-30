---
title: "SysEsdDeleteDocumentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-delete-document-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdDeleteDocumentPayload

Result of deleting an ESD document.

### Returned By

[`sysEsdDeleteDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-delete-document.md) mutation

```graphql
type SysEsdDeleteDocumentPayload {
  isDeleted: Boolean!
}
```

### Fields

#### `SysEsdDeleteDocumentPayload.isDeleted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the ESD document was deleted successfully.
