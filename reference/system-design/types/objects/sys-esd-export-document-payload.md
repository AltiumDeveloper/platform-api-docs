---
title: "SysEsdExportDocumentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-export-document-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdExportDocumentPayload

Result of exporting an ESD document.

### Returned By

[`sysEsdExportDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-export-document.md) mutation

```graphql
type SysEsdExportDocumentPayload {
  esdDocumentJson: String!
}
```

### Fields

#### `esdDocumentJson` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Serialized JSON representation of the exported ESD document.
