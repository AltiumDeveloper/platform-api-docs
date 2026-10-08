---
title: "BomItemsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-edge"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemsEdge

An edge in a connection.

### Member Of

[`BomItemsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection.md) object

```graphql
type BomItemsEdge {
  cursor: String!
  node: BomItem!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`BomItem!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) non-null object

The item at the end of the edge.
