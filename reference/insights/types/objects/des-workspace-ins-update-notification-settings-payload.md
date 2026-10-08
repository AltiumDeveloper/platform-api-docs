---
title: "DesWorkspaceInsUpdateNotificationSettingsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-notification-settings-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpdateNotificationSettingsPayload

Payload returned after updating notification settings.

### Returned By

[`desWorkspaceInsUnsubscribeFromNotifications`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-unsubscribe-from-notifications.md) mutation · [`desWorkspaceInsUpdateNotificationSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-notification-settings.md) mutation

```graphql
type DesWorkspaceInsUpdateNotificationSettingsPayload {
  errors: [DesWorkspaceInsInsightErrorPayload!]!
  settings: DesWorkspaceInsNotificationSettings
}
```

### Fields

#### `errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `settings` · [`DesWorkspaceInsNotificationSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-notification-settings.md) object

Notification settings after the update operation.
