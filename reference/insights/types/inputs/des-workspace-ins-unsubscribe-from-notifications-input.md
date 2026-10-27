---
title: "DesWorkspaceInsUnsubscribeFromNotificationsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-unsubscribe-from-notifications-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsUnsubscribeFromNotificationsInput

Input for removing a user from insight notifications.

### Member Of

[`desWorkspaceInsUnsubscribeFromNotifications`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-unsubscribe-from-notifications.md) mutation

```graphql
input DesWorkspaceInsUnsubscribeFromNotificationsInput {
  userId: ID!
}
```

### Fields

#### `userId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

User to exclude from receiving notifications.
