---
title: "BomBomsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-edge"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomBomsEdge

An edge in a connection.

### Member Of

[`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object

```graphql
type BomBomsEdge {
  cursor: String!
  node: BomWip!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`BomWip!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) non-null object

The item at the end of the edge.
