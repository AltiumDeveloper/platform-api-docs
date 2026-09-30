---
title: "sysEsdDeleteDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-delete-document"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysEsdDeleteDocument

Deletes ESD Document by identifier.

```graphql
sysEsdDeleteDocument(
  input: SysEsdDeleteDocumentInput!
): SysEsdDeleteDocumentPayload!
```

### Arguments

#### `sysEsdDeleteDocument.input` · [`SysEsdDeleteDocumentInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-delete-document-input.md) non-null input system-design

### Type

#### [`SysEsdDeleteDocumentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-delete-document-payload.md) object system-design

Result of deleting an ESD document.
