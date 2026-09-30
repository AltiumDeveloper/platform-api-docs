---
title: "DesCollaborationSimulationFile"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-file"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationSimulationFile

\*PROTOTYPE, SUBJECT TO CHANGE\*

### Member Of

[`DesCollaborationSimulationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) object

```graphql
type DesCollaborationSimulationFile {
  downloadUrl: String!
  fileTypeName: String!
}
```

### Fields

#### `DesCollaborationSimulationFile.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The file download URL.

#### `DesCollaborationSimulationFile.fileTypeName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The file type.
