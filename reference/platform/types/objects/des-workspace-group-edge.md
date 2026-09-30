---
title: "DesWorkspaceGroupEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceGroupEdge

An edge in a connection.

### Member Of

[`DesWorkspaceGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-connection.md) object

```graphql
type DesWorkspaceGroupEdge {
  cursor: String!
  node: DesWorkspaceGroup!
}
```

### Fields

#### `DesWorkspaceGroupEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesWorkspaceGroupEdge.node` · [`DesWorkspaceGroup!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) non-null object platform

The item at the end of the edge.
