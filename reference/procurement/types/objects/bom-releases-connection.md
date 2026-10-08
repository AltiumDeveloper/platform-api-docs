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

#### `edges` · [`[BomReleasesEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-edge.md) list object

A list of edges.

#### `nodes` · [`[BomRelease!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
