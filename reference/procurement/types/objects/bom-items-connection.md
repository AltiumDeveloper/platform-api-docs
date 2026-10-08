---
title: "BomItemsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemsConnection

A connection to a list of items.

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomItemsConnection {
  edges: [BomItemsEdge!]
  nodes: [BomItem!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[BomItemsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-edge.md) list object

A list of edges.

#### `nodes` · [`[BomItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
