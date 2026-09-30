---
title: "DesSymbolConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSymbolConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesSymbolConnection {
  edges: [DesSymbolEdge!]
  nodes: [DesSymbol!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesSymbolConnection.edges` · [`[DesSymbolEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-edge.md) list object library-management

A list of edges.

#### `DesSymbolConnection.nodes` · [`[DesSymbol!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) list object library-management

A flattened list of the nodes.

#### `DesSymbolConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesSymbolConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
