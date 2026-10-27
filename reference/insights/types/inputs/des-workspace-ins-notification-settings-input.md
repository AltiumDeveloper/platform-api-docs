---
title: "DesWorkspaceInsNotificationSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-settings-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsNotificationSettingsInput

Notification settings that control delivery of insight updates.

### Member Of

[`desWorkspaceInsUpdateNotificationSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-notification-settings.md) mutation

```graphql
input DesWorkspaceInsNotificationSettingsInput {
  enabled: Boolean!
  recipientSettings: DesWorkspaceInsNotificationRecipientSettingsInput
  unsubscribedUserIds: [ID!]
}
```

### Fields

#### `enabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Enables or disables notifications for insights.

#### `recipientSettings` · [`DesWorkspaceInsNotificationRecipientSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-recipient-settings-input.md) input

Recipient rules describing who should receive notifications.

#### `unsubscribedUserIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Users who should not receive notifications for insights.
