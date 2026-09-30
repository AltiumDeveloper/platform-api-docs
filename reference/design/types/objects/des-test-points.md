---
title: "DesTestPoints"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-test-points"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesTestPoints

Information for test points for PCB fabrication.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesTestPoints {
  downloadUrl: String
  packageName: String
  testPointFiles: [DesDownloadableFile!]!
}
```

### Fields

#### `DesTestPoints.downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package download URL.

#### `DesTestPoints.packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package name.

#### `DesTestPoints.testPointFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

File information for test point files.
