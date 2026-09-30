---
title: "BomReleasesConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomReleasesConnection

A connection to a list of items.

### Member Of

[`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomReleasesConnection {
  edges: [BomReleasesEdge!]
  nodes: [BomRelease!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `BomReleasesConnection.edges` · [`[BomReleasesEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-edge.md) list object procurement

A list of edges.

#### `BomReleasesConnection.nodes` · [`[BomRelease!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) list object procurement

A flattened list of the nodes.

#### `BomReleasesConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `BomReleasesConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
