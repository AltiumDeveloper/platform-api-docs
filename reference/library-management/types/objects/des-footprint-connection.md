---
title: "DesFootprintConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesFootprintConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesFootprintConnection {
  edges: [DesFootprintEdge!]
  nodes: [DesFootprint!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesFootprintConnection.edges` · [`[DesFootprintEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-edge.md) list object library-management

A list of edges.

#### `DesFootprintConnection.nodes` · [`[DesFootprint!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) list object library-management

A flattened list of the nodes.

#### `DesFootprintConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesFootprintConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
