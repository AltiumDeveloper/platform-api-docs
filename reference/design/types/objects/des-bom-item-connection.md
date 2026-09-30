---
title: "DesBomItemConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesBomItemConnection

A connection to a list of items.

### Member Of

[`DesBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom.md) object

```graphql
type DesBomItemConnection {
  edges: [DesBomItemEdge!]
  nodes: [DesBomItem!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesBomItemConnection.edges` · [`[DesBomItemEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-edge.md) list object design

A list of edges.

#### `DesBomItemConnection.nodes` · [`[DesBomItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) list object design

A flattened list of the nodes.

#### `DesBomItemConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesBomItemConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
