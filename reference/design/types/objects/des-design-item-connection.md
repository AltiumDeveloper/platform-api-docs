---
title: "DesDesignItemConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesignItemConnection

A connection to a list of items.

### Member Of

[`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object · [`DesSchematic`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-schematic.md) object

```graphql
type DesDesignItemConnection {
  edges: [DesDesignItemEdge!]
  nodes: [DesDesignItem!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesDesignItemEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-edge.md) list object

A list of edges.

#### `nodes` · [`[DesDesignItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
