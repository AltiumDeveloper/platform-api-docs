---
title: "DesNcDrill"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-nc-drill"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesNcDrill

NC Drill file information.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesNcDrill {
  downloadUrl: String
  ncDrillFiles: [DesDownloadableFile!]!
  packageName: String
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package download URL.

#### `ncDrillFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

NC Drill files.

#### `packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package name.
