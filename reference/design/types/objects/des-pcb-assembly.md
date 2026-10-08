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

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Download URL.

#### `folders` · [`[DesDownloadableFolder!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-folder.md) non-null object

Downloadable folders.

#### `lifeCycleStateName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Life cycle state name.

#### `packageName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the PCB assembly package.

#### `version` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Version.

#### Deprecated

#### `assemblyDrawings` · [`DesAssemblyDrawings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-assembly-drawings.md) **DEPRECATED** non-null object

> **Deprecated:** Use `folders`.

#### `pickAndPlace` · [`DesPickAndPlace!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pick-and-place.md) **DEPRECATED** non-null object

> **Deprecated:** Use `folders`.
