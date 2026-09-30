---
title: "DesReuseBlockEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReuseBlockEdge

An edge in a connection.

### Member Of

[`DesReuseBlockConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection.md) object

```graphql
type DesReuseBlockEdge {
  cursor: String!
  node: DesReuseBlock!
}
```

### Fields

#### `DesReuseBlockEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesReuseBlockEdge.node` · [`DesReuseBlock!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) non-null object library-management

The item at the end of the edge.
