---
title: "PlatformTokenConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenConnection

A connection to a list of items.

### Returned By

[`platform.token.byWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-workspace.md) query

```graphql
type PlatformTokenConnection {
  edges: [PlatformTokenEdge!]
  nodes: [PlatformToken!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `PlatformTokenConnection.edges` · [`[PlatformTokenEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-edge.md) list object platform

A list of edges.

#### `PlatformTokenConnection.nodes` · [`[PlatformToken!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) list interface platform

A flattened list of the nodes.

#### `PlatformTokenConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `PlatformTokenConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
