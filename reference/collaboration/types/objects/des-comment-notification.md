---
title: "DesCommentNotification"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-notification"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCommentNotification

Notification for comment.

### Returned By

[`desOnCommentUpdated`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/subscriptions/des-on-comment-updated.md) subscription

```graphql
type DesCommentNotification {
  action: String!
  data: DesCommentNotificationData!
}
```

### Fields

#### `action` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment notification action.

#### `data` · [`DesCommentNotificationData!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-notification-data.md) non-null object

Comment notification data.
