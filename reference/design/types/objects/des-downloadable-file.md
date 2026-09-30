---
title: "DesDownloadableFile"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDownloadableFile

Information and URL for a downloadable file.

### Member Of

[`DesAssemblyDrawings`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-assembly-drawings.md) object · [`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object · [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) object · [`DesDesignExchange`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-exchange.md) object · [`DesDownloadableFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-folder.md) object · [`DesGerber`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber.md) object · [`DesGerberX2`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-gerber-x2.md) object · [`DesIpc2581`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-ipc-2581.md) object · [`DesMesh3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d.md) object · [`DesModel3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-model-3-d.md) object · [`DesNcDrill`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-nc-drill.md) object · [`DesOdb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-odb.md) object · [`DesPickAndPlace`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pick-and-place.md) object · [`DesProjectTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) object · [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object · [`DesRevisionDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-details.md) object · [`DesSystemDiagram`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-system-diagram.md) object · [`DesTestPoints`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-test-points.md) object

```graphql
type DesDownloadableFile {
  downloadUrl: String!
  fileName: String!
  relativePath: String!
}
```

### Fields

#### `DesDownloadableFile.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Download URL for file.

#### `DesDownloadableFile.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Downloadable file name.

#### `DesDownloadableFile.relativePath` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Downloadable file relative path.
