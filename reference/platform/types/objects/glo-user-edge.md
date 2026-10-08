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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object

The item at the end of the edge.
