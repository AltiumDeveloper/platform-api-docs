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

#### `DesDesignItemConnection.edges` · [`[DesDesignItemEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-edge.md) list object design

A list of edges.

#### `DesDesignItemConnection.nodes` · [`[DesDesignItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) list object design

A flattened list of the nodes.

#### `DesDesignItemConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesDesignItemConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
