---
title: "DesOdb"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-odb"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesOdb

ODB file information.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesOdb {
  downloadUrl: String
  odbFiles: [DesDownloadableFile!]!
  packageName: String
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package download URL.

#### `odbFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

ODB files.

#### `packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package name.
