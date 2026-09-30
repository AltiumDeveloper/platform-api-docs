---
title: "DesWorkspaceInsRecipientGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-recipient-group-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsRecipientGroupInput

Group recipient reference for notifications.

### Member Of

[`DesWorkspaceInsNotificationRecipientSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-notification-recipient-settings-input.md) input

```graphql
input DesWorkspaceInsRecipientGroupInput {
  id: ID!
}
```

### Fields

#### `DesWorkspaceInsRecipientGroupInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the group that should receive notifications.
