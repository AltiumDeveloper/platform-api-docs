---
title: "CostedBomsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/costed-boms-edge"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# CostedBomsEdge

An edge in a connection.

### Member Of

[`CostedBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/costed-boms-connection.md) object

```graphql
type CostedBomsEdge {
  cursor: String!
  node: BomWip!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`BomWip!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) non-null object

The item at the end of the edge.
