---
title: "DesWorkspaceInsInsightsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-connection"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightsConnection

A connection to a list of items.

### Returned By

[`desWorkspaceInsInsights`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insights.md) query

```graphql
type DesWorkspaceInsInsightsConnection {
  edges: [DesWorkspaceInsInsightsEdge!]
  nodes: [DesWorkspaceInsInsight!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesWorkspaceInsInsightsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-edge.md) list object

A list of edges.

#### `nodes` · [`[DesWorkspaceInsInsight!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
