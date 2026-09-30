---
title: "DesPartGlobalSearchEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalSearchEdge

An edge in a connection.

### Member Of

[`DesPartGlobalSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection.md) object

```graphql
type DesPartGlobalSearchEdge {
  cursor: String!
  node: DesPartGlobalSearchItem!
}
```

### Fields

#### `DesPartGlobalSearchEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesPartGlobalSearchEdge.node` · [`DesPartGlobalSearchItem!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-item.md) non-null object library-management

The item at the end of the edge.
