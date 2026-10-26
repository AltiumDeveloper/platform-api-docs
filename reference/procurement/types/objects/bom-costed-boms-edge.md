---
title: "BomCostedBomsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-edge"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCostedBomsEdge

An edge in a connection.

### Member Of

[`BomCostedBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-connection.md) object

```graphql
type BomCostedBomsEdge {
  cursor: String!
  node: BomWip!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`BomWip!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) non-null object

The item at the end of the edge.
