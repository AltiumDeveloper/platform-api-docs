---
title: "DesCollaborationRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationRevision

ECAD, MCAD or ESD revision data.

### Returned By

[`desProjectCollaborationLatestRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-latest-revision.md) query

### Member Of

[`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object · [`DesCollaborationRevisionEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-edge.md) object · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesCollaborationRevision {
  comment: String!
  createdAt: DateTime!
  createdBy: DesUser!
  design: DesCadDesign
  downloadableFile: DesDownloadableFile!
}
```

### Fields

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision comment.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Creation time.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user who created this revision.

#### `design` · [`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Revision download data.
