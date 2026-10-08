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

#### `groups` · [`[DesWorkspaceInsRecipientGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-recipient-group.md) non-null object

Recipient groups included in notifications.

#### `sendToOwners` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Send notifications to the insight owners automatically.

#### `users` · [`[DesWorkspaceInsRecipientUser!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-recipient-user.md) non-null object

Explicit user recipients for notifications.
