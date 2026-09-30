---
title: "desWorkspaceInsInsights"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insights"
bounded_context: "Insights"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceInsInsights

Gets a list of insights.

```graphql
desWorkspaceInsInsights(
  after: String
  before: String
  filter: DesWorkspaceInsInsightFilterInput
  first: Int
  last: Int
  sorting: DesWorkspaceInsOrderingInput
): DesWorkspaceInsInsightsConnection
```

### Arguments

#### `desWorkspaceInsInsights.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desWorkspaceInsInsights.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desWorkspaceInsInsights.filter` · [`DesWorkspaceInsInsightFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-filter-input.md) input insights

#### `desWorkspaceInsInsights.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desWorkspaceInsInsights.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desWorkspaceInsInsights.sorting` · [`DesWorkspaceInsOrderingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-ordering-input.md) input insights

### Type

#### [`DesWorkspaceInsInsightsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-connection.md) object insights

A connection to a list of items.
