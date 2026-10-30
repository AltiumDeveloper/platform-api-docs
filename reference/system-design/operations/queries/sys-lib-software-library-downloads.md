---
title: "sysLibSoftwareLibraryDownloads"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-library-downloads"
bounded_context: "System Design"
kind: "queries"
experimental: false
deprecated: false
---

# sysLibSoftwareLibraryDownloads

Resolves uploaded user libraries to presigned archive download urls

### Type

#### [`SysLibSoftwareLibraryDownload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-library-download.md) object

```graphql
sysLibSoftwareLibraryDownloads(
  ids: [ID!]!
): [SysLibSoftwareLibraryDownload!]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
