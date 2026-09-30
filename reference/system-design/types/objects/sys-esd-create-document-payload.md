---
title: "SysEsdCreateDocumentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-create-document-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdCreateDocumentPayload

Result of creating a new ESD document.

### Returned By

[`sysEsdCreateDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-create-document.md) mutation

```graphql
type SysEsdCreateDocumentPayload {
  data: SysEsdDocument!
}
```

### Fields

#### `SysEsdCreateDocumentPayload.data` · [`SysEsdDocument!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) non-null object system-design

The newly created ESD document.
