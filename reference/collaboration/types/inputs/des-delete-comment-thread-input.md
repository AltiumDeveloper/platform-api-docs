---
title: "DesDeleteCommentThreadInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-delete-comment-thread-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteCommentThreadInput

Input for deleting a comment thread.

### Member Of

[`desDeleteCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-comment-thread.md) mutation

```graphql
input DesDeleteCommentThreadInput {
  commentThreadId: String!
  entityId: ID!
}
```

### Fields

#### `commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread identifier.

#### `entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Entity identifier.
