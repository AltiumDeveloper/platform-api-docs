---
title: "DesWorkspaceInsInsightsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-edge"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightsEdge

An edge in a connection.

### Member Of

[`DesWorkspaceInsInsightsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-connection.md) object

```graphql
type DesWorkspaceInsInsightsEdge {
  cursor: String!
  node: DesWorkspaceInsInsight!
}
```

### Fields

#### `DesWorkspaceInsInsightsEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesWorkspaceInsInsightsEdge.node` · [`DesWorkspaceInsInsight!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) non-null object insights

The item at the end of the edge.
