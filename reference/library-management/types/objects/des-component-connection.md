---
title: "DesComponentConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object · [`DesSymbolUsedBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-used-by.md) object

```graphql
type DesComponentConnection {
  edges: [DesComponentEdge!]
  nodes: [DesComponent!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesComponentConnection.edges` · [`[DesComponentEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-edge.md) list object library-management

A list of edges.

#### `DesComponentConnection.nodes` · [`[DesComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) list object library-management

A flattened list of the nodes.

#### `DesComponentConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesComponentConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
