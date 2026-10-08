---
title: "GloUserConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserConnection

A connection to a list of items.

### Returned By

[`gloUsers`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users.md) query

```graphql
type GloUserConnection {
  edges: [GloUserEdge!]
  nodes: [GloUser]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[GloUserEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-edge.md) list object

A list of edges.

#### `nodes` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
