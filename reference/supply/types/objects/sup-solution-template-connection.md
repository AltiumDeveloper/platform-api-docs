---
title: "SupSolutionTemplateConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-connection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateConnection

A connection to a list of items.

### Returned By

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-search.md) query

```graphql
type SupSolutionTemplateConnection {
  edges: [SupSolutionTemplateEdge!]
  nodes: [SupSolutionTemplate!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `SupSolutionTemplateConnection.edges` · [`[SupSolutionTemplateEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-edge.md) list object supply

A list of edges.

#### `SupSolutionTemplateConnection.nodes` · [`[SupSolutionTemplate!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) list object supply

A flattened list of the nodes.

#### `SupSolutionTemplateConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `SupSolutionTemplateConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
