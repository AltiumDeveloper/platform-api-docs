---
title: "DesIpc2581"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-ipc-2581"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesIpc2581

IPC 2581 information. IPC 2581 files hold manufacturing data.

### Member Of

[`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

```graphql
type DesIpc2581 {
  downloadUrl: String
  ipc2581Files: [DesDownloadableFile!]!
  packageName: String
}
```

### Fields

#### `DesIpc2581.downloadUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package download URL.

#### `DesIpc2581.ipc2581Files` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

IPC 2581 files.

#### `DesIpc2581.packageName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Package name.
