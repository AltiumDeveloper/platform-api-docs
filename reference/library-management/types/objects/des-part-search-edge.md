---
title: "DesPartSearchEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchEdge

An edge in a connection.

### Member Of

[`DesPartSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection.md) object

```graphql
type DesPartSearchEdge {
  cursor: String!
  node: DesPart!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) non-null object

The item at the end of the edge.
