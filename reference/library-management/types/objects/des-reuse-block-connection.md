---
title: "DesReuseBlockConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReuseBlockConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesReuseBlockConnection {
  edges: [DesReuseBlockEdge!]
  nodes: [DesReuseBlock!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesReuseBlockConnection.edges` · [`[DesReuseBlockEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-edge.md) list object library-management

A list of edges.

#### `DesReuseBlockConnection.nodes` · [`[DesReuseBlock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) list object library-management

A flattened list of the nodes.

#### `DesReuseBlockConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesReuseBlockConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
