---
title: "DesCollaborationSimulationRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationSimulationRevision

\*PROTOTYPE, SUBJECT TO CHANGE\*

### Returned By

[`desProjectCollaborationSimulationLatestRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-simulation-latest-revision.md) query

### Member Of

[`DesCollaborationSimulationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-connection.md) object · [`DesCollaborationSimulationRevisionEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-edge.md) object

```graphql
type DesCollaborationSimulationRevision {
  createdAt: DateTime!
  createdBy: DesUser!
  files: [DesCollaborationSimulationFile!]!
  metadata: String!
}
```

### Fields

#### `DesCollaborationSimulationRevision.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date and time when the simulation revision was created.

#### `DesCollaborationSimulationRevision.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user who created the simulation revision.

#### `DesCollaborationSimulationRevision.files` · [`[DesCollaborationSimulationFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-file.md) non-null object design

The files associated with the simulation revision.

#### `DesCollaborationSimulationRevision.metadata` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The metadata associated with the simulation revision.
