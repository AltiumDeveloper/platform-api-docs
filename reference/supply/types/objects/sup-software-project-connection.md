---
title: "SupSoftwareProjectConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-connection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectConnection

A connection to a list of items.

### Returned By

[`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-search.md) query

```graphql
type SupSoftwareProjectConnection {
  edges: [SupSoftwareProjectEdge!]
  nodes: [SupSoftwareProject!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `SupSoftwareProjectConnection.edges` · [`[SupSoftwareProjectEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-edge.md) list object supply

A list of edges.

#### `SupSoftwareProjectConnection.nodes` · [`[SupSoftwareProject!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) list object supply

A flattened list of the nodes.

#### `SupSoftwareProjectConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `SupSoftwareProjectConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
