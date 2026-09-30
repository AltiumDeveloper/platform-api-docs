---
title: "DesProjectConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectConnection

A connection to a list of items.

### Returned By

[`desProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects.md) query

```graphql
type DesProjectConnection {
  edges: [DesProjectEdge!]
  nodes: [DesProject!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesProjectConnection.edges` · [`[DesProjectEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-edge.md) list object design

A list of edges.

#### `DesProjectConnection.nodes` · [`[DesProject!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) list object design

A flattened list of the nodes.

#### `DesProjectConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesProjectConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
