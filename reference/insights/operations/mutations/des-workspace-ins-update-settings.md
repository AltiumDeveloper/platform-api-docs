---
title: "desWorkspaceInsUpdateSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-settings"
bounded_context: "Insights"
kind: "mutations"
experimental: false
deprecated: false
---

# desWorkspaceInsUpdateSettings

Updates the settings.

### Type

#### [`DesWorkspaceInsUserSettingsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings-payload.md) object

Payload returning user settings for insight notifications and filters.

```graphql
desWorkspaceInsUpdateSettings(
  input: DesWorkspaceInsUserSettingsInput!
): DesWorkspaceInsUserSettingsPayload!
```

### Arguments

#### `input` · [`DesWorkspaceInsUserSettingsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-user-settings-input.md) non-null input
