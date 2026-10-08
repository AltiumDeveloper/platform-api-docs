---
title: "DesWorkspaceInsNotificationRecipientSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-recipient-settings-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsNotificationRecipientSettingsInput

Recipients configuration for insight notifications.

### Member Of

[`DesWorkspaceInsNotificationSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-settings-input.md) input

```graphql
input DesWorkspaceInsNotificationRecipientSettingsInput {
  groups: [DesWorkspaceInsRecipientGroupInput!]!
  sendToOwners: Boolean!
  users: [DesWorkspaceInsRecipientUserInput!]!
}
```

### Fields

#### `groups` · [`[DesWorkspaceInsRecipientGroupInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-recipient-group-input.md) non-null input

User groups that should receive notifications.

#### `sendToOwners` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Send notifications to insight owners automatically.

#### `users` · [`[DesWorkspaceInsRecipientUserInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-recipient-user-input.md) non-null input

Explicit list of workspace users to notify.
