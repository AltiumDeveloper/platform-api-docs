---
title: "SupSolutionTemplateApplicationConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-connection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationConnection

A connection to a list of items.

### Returned By

[`supSolutionTemplateApplicationsSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications-search.md) query

```graphql
type SupSolutionTemplateApplicationConnection {
  edges: [SupSolutionTemplateApplicationEdge!]
  nodes: [SupSolutionTemplateApplication!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[SupSolutionTemplateApplicationEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSolutionTemplateApplication!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
