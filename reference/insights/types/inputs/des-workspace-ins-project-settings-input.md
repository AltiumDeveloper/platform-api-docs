---
title: "DesWorkspaceInsProjectSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-project-settings-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsProjectSettingsInput

User-level project filtering preferences for insights.

### Member Of

[`DesWorkspaceInsUserSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-user-settings-input.md) input

```graphql
input DesWorkspaceInsProjectSettingsInput {
  excludedEntities: [ID!]!
  excludeNonActiveProjects: Boolean!
  projectInactivityThresholdDays: Int!
}
```

### Fields

#### `excludedEntities` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Entities that should be excluded from insight calculations.

#### `excludeNonActiveProjects` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Exclude projects that are no longer active from insight results.

#### `projectInactivityThresholdDays` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of days after which inactive projects are ignored.
