---
title: "DesUpdateTaskCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-task-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateTaskCommentInput

Input for updating a task comment.

### Member Of

[`desUpdateTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-task-comment.md) mutation

```graphql
input DesUpdateTaskCommentInput {
  commentId: String!
  taskId: ID!
  text: String!
}
```

### Fields

#### `DesUpdateTaskCommentInput.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The comment identifier.

#### `DesUpdateTaskCommentInput.taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The task node identifier.

#### `DesUpdateTaskCommentInput.text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New comment text.
