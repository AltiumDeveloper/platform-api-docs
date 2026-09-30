---
title: "GloUserEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserEdge

An edge in a connection.

### Member Of

[`GloUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-connection.md) object

```graphql
type GloUserEdge {
  cursor: String!
  node: GloUser
}
```

### Fields

#### `GloUserEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `GloUserEdge.node` · [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object platform

The item at the end of the edge.
