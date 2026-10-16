---
title: "DesWorkspaceInsUserSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUserSettings

User settings related to insights.

### Returned By

[`desWorkspaceInsSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-settings.md) query

### Member Of

[`DesWorkspaceInsUserSettingsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings-payload.md) object

```graphql
type DesWorkspaceInsUserSettings {
  insightTypesSettings: DesWorkspaceInsInsightTypesSettingsGql!
  projectsSettings: DesWorkspaceInsProjectsSettings!
}
```

### Fields

#### `insightTypesSettings` · [`DesWorkspaceInsInsightTypesSettingsGql!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-types-settings-gql.md) non-null object

Preferences for including or excluding specific insight types.

#### `projectsSettings` · [`DesWorkspaceInsProjectsSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-projects-settings.md) non-null object

Project settings that influence which insights are shown.
