---
title: "SupSoftwareProjectEvalKitSourceConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSourceConnection

A connection to a list of items.

### Returned By

[`supEvalKitSoftwareProjectCompatibleEvalKitSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search.md) query

### Member Of

[`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object

```graphql
type SupSoftwareProjectEvalKitSourceConnection {
  edges: [SupSoftwareProjectEvalKitSourceEdge!]
  nodes: [SupSoftwareProjectEvalKitSource!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `SupSoftwareProjectEvalKitSourceConnection.edges` · [`[SupSoftwareProjectEvalKitSourceEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-edge.md) list object supply

A list of edges.

#### `SupSoftwareProjectEvalKitSourceConnection.nodes` · [`[SupSoftwareProjectEvalKitSource!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) list object supply

A flattened list of the nodes.

#### `SupSoftwareProjectEvalKitSourceConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `SupSoftwareProjectEvalKitSourceConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
