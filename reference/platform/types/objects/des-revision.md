---
title: "DesRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRevision

Revision details identifier for later use or full details.

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

```graphql
type DesRevision {
  details: DesRevisionDetails
  revisionId: String!
}
```

### Fields

#### `details` · [`DesRevisionDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-details.md) object

The revision details or null for unmanaged components.

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for revision used in [`desRevisionDetailsByRevisionId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-details-by-revision-id.md). The instance may not exist for unmanaged components.
