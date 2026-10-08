---
title: "DesDeleteCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-delete-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteCommentInput

Input for deleting a comment.

### Member Of

[`desDeleteComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-comment.md) mutation

```graphql
input DesDeleteCommentInput {
  commentId: String!
  commentThreadId: String!
  entityId: ID!
}
```

### Fields

#### `commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment identifier.

#### `commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread identifier.

#### `entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Entity identifier.
