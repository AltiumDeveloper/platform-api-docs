---
title: "DesVcsRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesVcsRevision

VCS revision/commit information.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesVcsRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-connection.md) object · [`DesVcsRevisionEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-edge.md) object

```graphql
type DesVcsRevision {
  author: String!
  createdAt: DateTime!
  files: [DesVcsRevisionFileChange!]!
  message: String!
  revisionId: String!
}
```

### Fields

#### `DesVcsRevision.author` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

User that created the VCS revision.

#### `DesVcsRevision.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

`DateTime` when VCS revision was created.

#### `DesVcsRevision.files` · [`[DesVcsRevisionFileChange!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-file-change.md) non-null object design

VCS revision files.

#### `DesVcsRevision.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

VCS revision message.

#### `DesVcsRevision.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

VCS revision identifier.
