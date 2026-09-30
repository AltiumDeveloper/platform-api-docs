---
title: "DesComponentTypeConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTypeConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesComponentTypeConnection {
  edges: [DesComponentTypeEdge!]
  nodes: [DesComponentType!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesComponentTypeConnection.edges` · [`[DesComponentTypeEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-edge.md) list object library-management

A list of edges.

#### `DesComponentTypeConnection.nodes` · [`[DesComponentType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) list object library-management

A flattened list of the nodes.

#### `DesComponentTypeConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesComponentTypeConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
