---
title: "GloUserGroupEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserGroupEdge

An edge in a connection.

### Member Of

[`GloUserGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-connection.md) object

```graphql
type GloUserGroupEdge {
  cursor: String!
  node: GloUserGroup
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) object

The item at the end of the edge.
