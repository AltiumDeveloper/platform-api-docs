---
title: "DesOnCommentUpdatedInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-on-comment-updated-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesOnCommentUpdatedInput

Input for subscribing to comment update notifications.

### Member Of

[`desOnCommentUpdated`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/subscriptions/des-on-comment-updated.md) subscription

```graphql
input DesOnCommentUpdatedInput {
  token: String!
  workspaceUrl: String
}
```

### Fields

#### `DesOnCommentUpdatedInput.token` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Access token for authorization.

#### `DesOnCommentUpdatedInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workspace URL.
