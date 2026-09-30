---
title: "SupEvalKitEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitEdge

An edge in a connection.

### Member Of

[`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object

```graphql
type SupEvalKitEdge {
  cursor: String!
  node: SupEvalKit!
}
```

### Fields

#### `SupEvalKitEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `SupEvalKitEdge.node` · [`SupEvalKit!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) non-null object supply

The item at the end of the edge.
