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

### Type

#### [`DesWorkspaceInsInsightsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `filter` · [`DesWorkspaceInsInsightFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `sorting` · [`DesWorkspaceInsOrderingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-ordering-input.md) input
