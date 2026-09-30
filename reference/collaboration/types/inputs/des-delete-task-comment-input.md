---
title: "DesDeleteTaskCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-delete-task-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteTaskCommentInput

Input for deleting a task comment.

### Member Of

[`desDeleteTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-task-comment.md) mutation

```graphql
input DesDeleteTaskCommentInput {
  commentId: String!
  taskId: ID!
}
```

### Fields

#### `DesDeleteTaskCommentInput.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The comment identifier.

#### `DesDeleteTaskCommentInput.taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The task node identifier.
