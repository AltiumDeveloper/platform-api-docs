---
title: "desRevisionDetailsByRevisionId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-details-by-revision-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desRevisionDetailsByRevisionId

Searches details of a revision by its reference identifier.

### Type

#### [`DesRevisionDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-details.md) object

Revision details.

```graphql
desRevisionDetailsByRevisionId(
  revisionId: String!
  workspaceUrl: String
): DesRevisionDetails
```

### Arguments

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for a specific revision.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace in which the revision exists.
