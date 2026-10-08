---
title: "DesGerberX2"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber-x2"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesGerberX2

Gerber X2 information. Gerber X2 files store the shape and location data for all the elements on the PCB layout.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesGerberX2 {
  downloadUrl: String
  gerberX2Files: [DesDownloadableFile!]!
  packageName: String
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package download URL.

#### `gerberX2Files` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Gerber X2 files.

#### `packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package name.
