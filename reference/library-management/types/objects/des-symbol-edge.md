---
title: "DesSymbolEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSymbolEdge

An edge in a connection.

### Member Of

[`DesSymbolConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection.md) object

```graphql
type DesSymbolEdge {
  cursor: String!
  node: DesSymbol!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesSymbol!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) non-null object

The item at the end of the edge.
