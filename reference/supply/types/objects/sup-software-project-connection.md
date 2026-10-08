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

#### `edges` · [`[SupSoftwareProjectEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSoftwareProject!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
