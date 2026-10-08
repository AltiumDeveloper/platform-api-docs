---
title: "DesPickAndPlace"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pick-and-place"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPickAndPlace

PCB Pick and Place files and download URL.

### Member Of

[`DesPcbAssembly`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-assembly.md) object

```graphql
type DesPickAndPlace {
  downloadUrl: String
  packageName: String
  pickAndPlaceFiles: [DesDownloadableFile!]!
}
```

### Fields

#### `downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package download URL.

#### `packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Package name.

#### `pickAndPlaceFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Pick and Place files.
