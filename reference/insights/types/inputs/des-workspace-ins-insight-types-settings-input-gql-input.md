---
title: "DesWorkspaceInsInsightTypesSettingsInputGqlInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-types-settings-input-gql-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightTypesSettingsInputGqlInput

Insight-type preferences that define which insights are shown.

### Member Of

[`DesWorkspaceInsUserSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-user-settings-input.md) input

```graphql
input DesWorkspaceInsInsightTypesSettingsInputGqlInput {
  excludedInsightTypes: [String!]!
}
```

### Fields

#### `excludedInsightTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Insight types that should be excluded from insights.
