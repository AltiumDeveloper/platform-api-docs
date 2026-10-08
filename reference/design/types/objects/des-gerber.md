---
title: "DesGerber"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesGerber

Gerber information. Gerber files store the shape and location data for all the elements on the PCB layout.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesGerber {
  downloadUrl: String
  gerberFiles: [DesDownloadableFile!]!
  packageName: String
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package download URL.

#### `gerberFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Gerber files.

#### `packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package name.
