---
title: "DesVcsRevisionEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesVcsRevisionEdge

An edge in a connection.

### Member Of

[`DesVcsRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-connection.md) object

```graphql
type DesVcsRevisionEdge {
  cursor: String!
  node: DesVcsRevision!
}
```

### Fields

#### `DesVcsRevisionEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesVcsRevisionEdge.node` · [`DesVcsRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) non-null object design

The item at the end of the edge.
