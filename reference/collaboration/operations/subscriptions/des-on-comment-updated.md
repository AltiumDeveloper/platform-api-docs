---
title: "desOnCommentUpdated"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/subscriptions/des-on-comment-updated"
bounded_context: "Collaboration"
kind: "subscriptions"
experimental: false
deprecated: false
---

# desOnCommentUpdated

Called on subscription events.

### Type

#### [`DesCommentNotification`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-notification.md) object

Notification for comment.

```graphql
desOnCommentUpdated(
  input: DesOnCommentUpdatedInput!
): DesCommentNotification!
```

### Arguments

#### `input` · [`DesOnCommentUpdatedInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-on-comment-updated-input.md) non-null input
