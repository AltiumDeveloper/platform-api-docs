---
title: "DesComponentTemplateConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTemplateConnection

A connection to a list of items.

### Member Of

[`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

```graphql
type DesComponentTemplateConnection {
  edges: [DesComponentTemplateEdge!]
  nodes: [DesComponentTemplate!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesComponentTemplateConnection.edges` · [`[DesComponentTemplateEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-edge.md) list object library-management

A list of edges.

#### `DesComponentTemplateConnection.nodes` · [`[DesComponentTemplate!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) list object library-management

A flattened list of the nodes.

#### `DesComponentTemplateConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesComponentTemplateConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
