---
title: "DesAssemblyDrawings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-assembly-drawings"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesAssemblyDrawings

Assembly drawing files display all components on the board in their assembled locations, with corresponding designators.

### Member Of

[`DesPcbAssembly`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-assembly.md) object

```graphql
type DesAssemblyDrawings {
  assemblyDrawingFiles: [DesDownloadableFile!]!
  downloadUrl: String
  packageName: String
}
```

### Fields

#### `DesAssemblyDrawings.assemblyDrawingFiles` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Assembly drawing files.

#### `DesAssemblyDrawings.downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package download URL.

#### `DesAssemblyDrawings.packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package name.
