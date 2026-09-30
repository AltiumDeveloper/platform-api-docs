---
title: "DesWorkspaceInsInsightFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-filter-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightFilterInput

Input for filtering insights based on various criteria.

### Member Of

[`desWorkspaceInsInsights`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insights.md) query

```graphql
input DesWorkspaceInsInsightFilterInput {
  linkedEntities: [ID!]
  name: [String!]
  severity: [String!]
  status: [String!]
  type: [String!]
}
```

### Fields

#### `DesWorkspaceInsInsightFilterInput.linkedEntities` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Limit results to insights linked to the provided entities.

#### `DesWorkspaceInsInsightFilterInput.name` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Match insights whose names contain any of the provided values.

#### `DesWorkspaceInsInsightFilterInput.severity` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter insights by severity levels.

#### `DesWorkspaceInsInsightFilterInput.status` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter insights by their status values.

#### `DesWorkspaceInsInsightFilterInput.type` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter insights by their type identifiers.
