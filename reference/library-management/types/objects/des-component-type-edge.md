---
title: "DesComponentTypeEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTypeEdge

An edge in a connection.

### Member Of

[`DesComponentTypeConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-connection.md) object

```graphql
type DesComponentTypeEdge {
  cursor: String!
  node: DesComponentType!
}
```

### Fields

#### `DesComponentTypeEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesComponentTypeEdge.node` · [`DesComponentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) non-null object library-management

The item at the end of the edge.
