---
title: "DesWorkspaceInsInsightErrorPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightErrorPayload

Standard error payload returned by insight mutations.

### Member Of

[`DesWorkspaceInsInitializeInsightsIfRequiredPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-initialize-insights-if-required-payload.md) object · [`DesWorkspaceInsUpdateInsightByIdPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-insight-by-id-payload.md) object · [`DesWorkspaceInsUpdateNotificationSettingsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-notification-settings-payload.md) object · [`DesWorkspaceInsUpsertInsightByKeyPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-upsert-insight-by-key-payload.md) object · [`DesWorkspaceInsUserSettingsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings-payload.md) object

```graphql
type DesWorkspaceInsInsightErrorPayload {
  message: String!
}
```

### Fields

#### `DesWorkspaceInsInsightErrorPayload.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Human-readable description of the error.
