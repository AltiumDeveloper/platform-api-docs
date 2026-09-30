---
title: "DesComponentEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentEdge

An edge in a connection.

### Member Of

[`DesComponentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection.md) object

```graphql
type DesComponentEdge {
  cursor: String!
  node: DesComponent!
}
```

### Fields

#### `DesComponentEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesComponentEdge.node` · [`DesComponent!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) non-null object library-management

The item at the end of the edge.
