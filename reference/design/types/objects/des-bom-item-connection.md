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

#### `edges` · [`[DesBomItemEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-edge.md) list object

A list of edges.

#### `nodes` · [`[DesBomItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
