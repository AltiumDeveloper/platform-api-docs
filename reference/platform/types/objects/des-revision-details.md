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

#### `childCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of children associated with this revision.

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Revision comment.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was created.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Revision description.

#### `isDeleted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether this revision is deleted.

#### `lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object

The life cycle state information of the revision.

#### `modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was last modified.

#### `parentCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The number of parents associated with this revision.

#### `references` · [`[DesDownloadableFile!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object Design

Reference file information and download URL.

#### `releaseDate` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was released.

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier.
