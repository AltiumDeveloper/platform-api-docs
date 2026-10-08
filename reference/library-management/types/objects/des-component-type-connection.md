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

#### `edges` · [`[DesComponentTypeEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-edge.md) list object

A list of edges.

#### `nodes` · [`[DesComponentType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
