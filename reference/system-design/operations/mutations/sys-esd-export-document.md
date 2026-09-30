---
title: "sysEsdExportDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-export-document"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysEsdExportDocument

Exports new ESD Document.

```graphql
sysEsdExportDocument(
  input: SysEsdExportDocumentInput!
): SysEsdExportDocumentPayload!
```

### Arguments

#### `sysEsdExportDocument.input` · [`SysEsdExportDocumentInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-export-document-input.md) non-null input system-design

### Type

#### [`SysEsdExportDocumentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-export-document-payload.md) object system-design

Result of exporting an ESD document.
