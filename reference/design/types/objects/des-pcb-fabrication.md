---
title: "DesPcbFabrication"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPcbFabrication

PCB fabrication information and URLs to download files.

### Member Of

[`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object

```graphql
type DesPcbFabrication {
  downloadUrl: String!
  folders: [DesDownloadableFolder!]!
  gerber: DesGerber! @deprecated
  gerberX2: DesGerberX2! @deprecated
  ipc2581: DesIpc2581! @deprecated
  lifeCycleStateName: String!
  ncDrill: DesNcDrill! @deprecated
  odb: DesOdb! @deprecated
  packageName: String!
  testPoints: DesTestPoints! @deprecated
  version: String!
}
```

### Fields

#### `DesPcbFabrication.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Download URL.

#### `DesPcbFabrication.folders` · [`[DesDownloadableFolder!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-folder.md) non-null object design

Downloadable folders.

#### `DesPcbFabrication.lifeCycleStateName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Life cycle state name.

#### `DesPcbFabrication.packageName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the PCB fabrication package.

#### `DesPcbFabrication.version` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Version.

#### Deprecated

#### `DesPcbFabrication.gerber` · [`DesGerber!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbFabrication.gerberX2` · [`DesGerberX2!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber-x2.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbFabrication.ipc2581` · [`DesIpc2581!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-ipc-2581.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbFabrication.ncDrill` · [`DesNcDrill!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-nc-drill.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbFabrication.odb` · [`DesOdb!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-odb.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.

#### `DesPcbFabrication.testPoints` · [`DesTestPoints!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-test-points.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `folders`.
