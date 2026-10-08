---
title: "desWorkspaceInsInsightById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insight-by-id"
bounded_context: "Insights"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceInsInsightById

Gets an insight by its identifier.

### Type

#### [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

Insight aggregated from workspace signals and related resources.

```graphql
desWorkspaceInsInsightById(
  id: ID!
): DesWorkspaceInsInsight
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
