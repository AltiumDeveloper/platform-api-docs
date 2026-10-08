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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesVcsRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) non-null object

The item at the end of the edge.
