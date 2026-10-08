---
title: "DesWorkspaceInsRecipientUserInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-recipient-user-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsRecipientUserInput

User recipient reference for notifications.

### Member Of

[`DesWorkspaceInsNotificationRecipientSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-recipient-settings-input.md) input

```graphql
input DesWorkspaceInsRecipientUserInput {
  id: ID!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the user that should receive notifications.
