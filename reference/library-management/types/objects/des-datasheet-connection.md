---
title: "DesDatasheetConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesDatasheetConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesDatasheetConnection {
  edges: [DesDatasheetEdge!]
  nodes: [DesDatasheet!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesDatasheetConnection.edges` · [`[DesDatasheetEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-edge.md) list object library-management

A list of edges.

#### `DesDatasheetConnection.nodes` · [`[DesDatasheet!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) list object library-management

A flattened list of the nodes.

#### `DesDatasheetConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesDatasheetConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
