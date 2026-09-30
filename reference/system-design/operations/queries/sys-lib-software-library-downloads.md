---
title: "sysLibSoftwareLibraryDownloads"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-library-downloads"
bounded_context: "System Design"
kind: "queries"
experimental: true
deprecated: false
---

# sysLibSoftwareLibraryDownloads

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Resolves uploaded user libraries to presigned archive download urls

```graphql
sysLibSoftwareLibraryDownloads(
  ids: [ID!]!
): [SysLibSoftwareLibraryDownload!]!
```

### Arguments

#### `sysLibSoftwareLibraryDownloads.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SysLibSoftwareLibraryDownload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-library-download.md) object system-design **EXPERIMENTAL**
