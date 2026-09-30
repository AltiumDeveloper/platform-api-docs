---
title: "SysEsdUpdateDocumentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-update-document-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdUpdateDocumentPayload

Result of updating an ESD document.

### Returned By

[`sysEsdUpdateDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-update-document.md) mutation

```graphql
type SysEsdUpdateDocumentPayload {
  data: SysEsdDocument!
}
```

### Fields

#### `SysEsdUpdateDocumentPayload.data` · [`SysEsdDocument!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) non-null object system-design

The updated ESD document.
