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

#### `edges` · [`[DesComponentEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-edge.md) list object

A list of edges.

#### `nodes` · [`[DesComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
