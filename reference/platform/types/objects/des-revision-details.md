---
title: "DesRevisionDetails"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-details"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRevisionDetails

Revision details.

### Returned By

[`desRevisionDetailsByRevisionId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-details-by-revision-id.md) query

### Member Of

[`DesRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision.md) object

```graphql
type DesRevisionDetails {
  childCount: Int!
  comment: String
  createdAt: DateTime!
  description: String
  isDeleted: Boolean!
  lifeCycleState: DesLifeCycleState!
  modifiedAt: DateTime!
  parentCount: Int!
  references: [DesDownloadableFile!]!
  releaseDate: DateTime!
  revisionId: String!
}
```

### Fields

#### `DesRevisionDetails.childCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of children associated with this revision.

#### `DesRevisionDetails.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Revision comment.

#### `DesRevisionDetails.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was created.

#### `DesRevisionDetails.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Revision description.

#### `DesRevisionDetails.isDeleted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this revision is deleted.

#### `DesRevisionDetails.lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object platform

The life cycle state information of the revision.

#### `DesRevisionDetails.modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was last modified.

#### `DesRevisionDetails.parentCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of parents associated with this revision.

#### `DesRevisionDetails.references` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Reference file information and download URL.

#### `DesRevisionDetails.releaseDate` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was released.

#### `DesRevisionDetails.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier.
