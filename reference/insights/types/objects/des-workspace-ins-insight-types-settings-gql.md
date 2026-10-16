---
title: "DesWorkspaceInsInsightTypesSettingsGql"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-types-settings-gql"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightTypesSettingsGql

Insight-type preferences affecting which insights are shown.

### Member Of

[`DesWorkspaceInsUserSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings.md) object

```graphql
type DesWorkspaceInsInsightTypesSettingsGql {
  excludedInsightTypes: [String!]!
}
```

### Fields

#### `excludedInsightTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Insight types that should be excluded from insights.
