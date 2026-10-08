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

#### `edges` · [`[DesReuseBlockEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-edge.md) list object

A list of edges.

#### `nodes` · [`[DesReuseBlock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
