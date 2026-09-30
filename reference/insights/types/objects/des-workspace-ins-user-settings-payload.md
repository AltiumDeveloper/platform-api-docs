---
title: "DesWorkspaceInsUserSettingsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUserSettingsPayload

Payload returning user settings for insight notifications and filters.

### Returned By

[`desWorkspaceInsUpdateSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-settings.md) mutation

```graphql
type DesWorkspaceInsUserSettingsPayload {
  errors: [DesWorkspaceInsInsightErrorPayload!]!
  userSettings: DesWorkspaceInsUserSettings
}
```

### Fields

#### `DesWorkspaceInsUserSettingsPayload.errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object insights

Errors that occurred while performing the operation.

#### `DesWorkspaceInsUserSettingsPayload.userSettings` · [`DesWorkspaceInsUserSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings.md) object insights

User settings that match the request.
