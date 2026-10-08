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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object

The item at the end of the edge.
