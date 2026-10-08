---
title: "SysEsdImportDocumentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-import-document-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdImportDocumentPayload

Result of importing content into an ESD document.

### Returned By

[`sysEsdImportDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-import-document.md) mutation

```graphql
type SysEsdImportDocumentPayload {
  isImported: Boolean!
}
```

### Fields

#### `isImported` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the ESD document content was imported successfully.
