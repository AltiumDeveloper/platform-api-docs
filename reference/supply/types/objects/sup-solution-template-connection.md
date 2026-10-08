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

#### `edges` · [`[SupSolutionTemplateEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSolutionTemplate!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
