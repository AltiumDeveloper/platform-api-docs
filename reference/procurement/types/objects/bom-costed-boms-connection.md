---
title: "BomCostedBomsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-connection"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCostedBomsConnection

A connection to a list of items.

### Member Of

[`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomCostedBomsConnection {
  edges: [BomCostedBomsEdge!]
  nodes: [BomWip!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[BomCostedBomsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-edge.md) list object

A list of edges.

#### `nodes` · [`[BomWip!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
