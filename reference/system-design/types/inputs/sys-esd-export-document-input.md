---
title: "SysEsdExportDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-export-document-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdExportDocumentInput

Input for exporting an ESD document.

### Member Of

[`sysEsdExportDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-export-document.md) mutation

```graphql
input SysEsdExportDocumentInput {
  id: ID!
}
```

### Fields

#### `SysEsdExportDocumentInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the ESD document to export.
