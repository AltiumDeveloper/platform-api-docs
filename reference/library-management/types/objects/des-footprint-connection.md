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

#### `edges` · [`[DesFootprintEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-edge.md) list object

A list of edges.

#### `nodes` · [`[DesFootprint!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
