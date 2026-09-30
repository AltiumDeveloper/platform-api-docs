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

#### `GloUserConnection.edges` · [`[GloUserEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-edge.md) list object platform

A list of edges.

#### `GloUserConnection.nodes` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object platform

A flattened list of the nodes.

#### `GloUserConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `GloUserConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
