---
title: "DesWorkspaceInsOrderingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-ordering-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsOrderingInput

Sorting configuration for insight queries.

### Member Of

[`desWorkspaceInsInsights`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insights.md) query

```graphql
input DesWorkspaceInsOrderingInput {
  field: String
  isDesc: Boolean
}
```

### Fields

#### `DesWorkspaceInsOrderingInput.field` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Field name used for ordering results.

#### `DesWorkspaceInsOrderingInput.isDesc` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether results should be sorted in descending order.
