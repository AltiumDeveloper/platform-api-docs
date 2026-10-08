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

#### `author` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

User that created the VCS revision.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

[`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when VCS revision was created.

#### `files` · [`[DesVcsRevisionFileChange!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-file-change.md) non-null object

VCS revision files.

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

VCS revision message.

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

VCS revision identifier.
