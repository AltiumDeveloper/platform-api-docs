---
title: "DesWorkspaceInsUserSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-user-settings-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsUserSettingsInput

User-specific settings that control insight experience.

### Member Of

[`desWorkspaceInsUpdateSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-settings.md) mutation

```graphql
input DesWorkspaceInsUserSettingsInput {
  insightTypesSettings: DesWorkspaceInsInsightTypesSettingsInputGqlInput
  projectsSettings: DesWorkspaceInsProjectSettingsInput
}
```

### Fields

#### `insightTypesSettings` · [`DesWorkspaceInsInsightTypesSettingsInputGqlInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-types-settings-input-gql-input.md) input

Preferences for including or excluding specific insight types.

#### `projectsSettings` · [`DesWorkspaceInsProjectSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-project-settings-input.md) input

Project-level preferences used when delivering insights.
