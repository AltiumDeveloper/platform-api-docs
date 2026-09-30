---
title: "DesWorkspaceInsNotificationRecipientSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-notification-recipient-settings"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsNotificationRecipientSettings

Recipients configuration applied to insight notifications.

### Member Of

[`DesWorkspaceInsNotificationSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-notification-settings.md) object

```graphql
type DesWorkspaceInsNotificationRecipientSettings {
  groups: [DesWorkspaceInsRecipientGroup!]!
  sendToOwners: Boolean!
  users: [DesWorkspaceInsRecipientUser!]!
}
```

### Fields

#### `DesWorkspaceInsNotificationRecipientSettings.groups` · [`[DesWorkspaceInsRecipientGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-recipient-group.md) non-null object insights

Recipient groups included in notifications.

#### `DesWorkspaceInsNotificationRecipientSettings.sendToOwners` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Send notifications to the insight owners automatically.

#### `DesWorkspaceInsNotificationRecipientSettings.users` · [`[DesWorkspaceInsRecipientUser!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-recipient-user.md) non-null object insights

Explicit user recipients for notifications.
