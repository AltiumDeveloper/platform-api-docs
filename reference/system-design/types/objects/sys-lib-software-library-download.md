---
title: "SysLibSoftwareLibraryDownload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-library-download"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysLibSoftwareLibraryDownload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`sysLibSoftwareLibraryDownloads`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-library-downloads.md) query

```graphql
type SysLibSoftwareLibraryDownload {
  downloadUrl: String
  fileName: String!
  id: ID!
  name: String!
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
