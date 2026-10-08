---
title: "DesDesignItemEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesignItemEdge

An edge in a connection.

### Member Of

[`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object

```graphql
type DesDesignItemEdge {
  cursor: String!
  node: DesDesignItem!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesDesignItem!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) non-null object

The item at the end of the edge.
