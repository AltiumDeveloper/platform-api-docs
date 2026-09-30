---
title: "DesPcbAssembly"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-assembly"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPcbAssembly

PCB assembly information and URLs to download files.

### Member Of

[`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object

```graphql
type DesPcbAssembly {
  assemblyDrawings: DesAssemblyDrawings! @deprecated
  downloadUrl: String!
  folders: [DesDownloadableFolder!]!
  lifeCycleStateName: String!
  packageName: String!
  pickAndPlace: DesPickAndPlace! @deprecated
  version: String!
}
```

### Fields

#### `DesPcbAssembly.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Download URL.

#### `DesPcbAssembly.folders` · [`[DesDownloadableFolder!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-folder.md) non-null object design

Downloadable folders.

#### `DesPcbAssembly.lifeCycleStateName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Life cycle state name.

#### `DesPcbAssembly.packageName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the PCB assembly package.

#### `DesPcbAssembly.version` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Version.

#### Deprecated

#### `DesPcbAssembly.assemblyDrawings` · [`DesAssemblyDrawings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-assembly-drawings.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbAssembly.pickAndPlace` · [`DesPickAndPlace!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pick-and-place.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.
