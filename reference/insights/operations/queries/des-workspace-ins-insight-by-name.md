---
title: "desWorkspaceInsInsightByName"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insight-by-name"
bounded_context: "Insights"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceInsInsightByName

Gets an insight by its name.

```graphql
desWorkspaceInsInsightByName(
  name: String!
): DesWorkspaceInsInsight
```

### Arguments

#### `desWorkspaceInsInsightByName.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object insights

Insight aggregated from workspace signals and related resources.
