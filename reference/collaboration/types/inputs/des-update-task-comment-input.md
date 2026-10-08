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

#### `commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The comment identifier.

#### `taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The task node identifier.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New comment text.
