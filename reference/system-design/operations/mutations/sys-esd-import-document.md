---
title: "sysEsdImportDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-import-document"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysEsdImportDocument

Imports new ESD Document.

```graphql
sysEsdImportDocument(
  input: SysEsdImportDocumentInput!
): SysEsdImportDocumentPayload!
```

### Arguments

#### `sysEsdImportDocument.input` · [`SysEsdImportDocumentInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-import-document-input.md) non-null input system-design

### Type

#### [`SysEsdImportDocumentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-import-document-payload.md) object system-design

Result of importing content into an ESD document.
