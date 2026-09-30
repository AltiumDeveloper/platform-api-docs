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

#### `DesPickAndPlace.downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package download URL.

#### `DesPickAndPlace.packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package name.

#### `DesPickAndPlace.pickAndPlaceFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Pick and Place files.
