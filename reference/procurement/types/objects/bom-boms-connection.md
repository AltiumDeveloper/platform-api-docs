---
title: "BomBomsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomBomsConnection

A connection to a list of items.

### Returned By

[`bomBoms`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/queries/bom-boms.md) query

```graphql
type BomBomsConnection {
  edges: [BomBomsEdge!]
  nodes: [BomWip!]
  pageInfo: PageInfo!
}
```

### Fields

#### `BomBomsConnection.edges` · [`[BomBomsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-edge.md) list object procurement

A list of edges.

#### `BomBomsConnection.nodes` · [`[BomWip!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) list object procurement

A flattened list of the nodes.

#### `BomBomsConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.
