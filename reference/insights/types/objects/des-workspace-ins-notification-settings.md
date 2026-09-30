---
title: "DesWorkspaceInsNotificationSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-notification-settings"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsNotificationSettings

Notification settings defined for the current user.

### Returned By

[`desWorkspaceInsNotificationSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-notification-settings.md) query

### Member Of

[`DesWorkspaceInsUpdateNotificationSettingsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-notification-settings-payload.md) object

```graphql
type DesWorkspaceInsNotificationSettings {
  enabled: Boolean!
  recipientSettings: DesWorkspaceInsNotificationRecipientSettings!
  unsubscribedUserIds: [ID!]!
}
```

### Fields

#### `DesWorkspaceInsNotificationSettings.enabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether notifications are enabled for insights.

#### `DesWorkspaceInsNotificationSettings.recipientSettings` · [`DesWorkspaceInsNotificationRecipientSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-notification-recipient-settings.md) non-null object insights

Recipient configuration for insight notifications.

#### `DesWorkspaceInsNotificationSettings.unsubscribedUserIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Users who should not receive insight notifications.
