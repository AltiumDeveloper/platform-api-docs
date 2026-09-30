---
title: "DesBomItemEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesBomItemEdge

An edge in a connection.

### Member Of

[`DesBomItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-connection.md) object

```graphql
type DesBomItemEdge {
  cursor: String!
  node: DesBomItem!
}
```

### Fields

#### `DesBomItemEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesBomItemEdge.node` · [`DesBomItem!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) non-null object design

The item at the end of the edge.
