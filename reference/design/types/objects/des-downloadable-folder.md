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

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Download URL for the whole folder.

#### `files` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Downloadable files of this folder.

#### `relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The folder relative path.
