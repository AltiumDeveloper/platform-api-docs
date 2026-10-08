---
title: "DesCollaborationRevisionEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationRevisionEdge

An edge in a connection.

### Member Of

[`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object

```graphql
type DesCollaborationRevisionEdge {
  cursor: String!
  node: DesCollaborationRevision!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesCollaborationRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) non-null object

The item at the end of the edge.
