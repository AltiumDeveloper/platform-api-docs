---
title: "sysEsdDocumentById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-document-by-id"
bounded_context: "System Design"
kind: "queries"
experimental: false
deprecated: false
---

# sysEsdDocumentById

Gets ESD Document by identifier.

### Type

#### [`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) object

Represents an ESD (Electronic System Design) document stored in a regional workspace.

```graphql
sysEsdDocumentById(
  id: ID!
): SysEsdDocument
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
