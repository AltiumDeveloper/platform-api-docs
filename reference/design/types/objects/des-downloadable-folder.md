---
title: "DesDownloadableFolder"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-folder"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDownloadableFolder

A folder of downloadable files.

### Member Of

[`DesPcbAssembly`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-assembly.md) object · [`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesDownloadableFolder {
  downloadUrl: String!
  files: [DesDownloadableFile!]!
  relativePath: String!
}
```

### Fields

#### `DesDownloadableFolder.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Download URL for the whole folder.

#### `DesDownloadableFolder.files` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Downloadable files of this folder.

#### `DesDownloadableFolder.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The folder relative path.
