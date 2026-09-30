---
title: "DesWorkspaceUserEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceUserEdge

An edge in a connection.

### Member Of

[`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object

```graphql
type DesWorkspaceUserEdge {
  cursor: String!
  node: DesWorkspaceUser!
}
```

### Fields

#### `DesWorkspaceUserEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesWorkspaceUserEdge.node` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

The item at the end of the edge.
