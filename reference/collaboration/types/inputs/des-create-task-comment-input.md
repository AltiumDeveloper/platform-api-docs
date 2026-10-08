---
title: "DesCreateTaskCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-task-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateTaskCommentInput

Input for task comment creation.

### Member Of

[`desCreateTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-task-comment.md) mutation

```graphql
input DesCreateTaskCommentInput {
  taskId: ID!
  text: String!
}
```

### Fields

#### `taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The task node identifier.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The comment text.
