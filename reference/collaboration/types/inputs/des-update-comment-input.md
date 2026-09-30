---
title: "DesUpdateCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateCommentInput

Input for updating comment.

### Member Of

[`desUpdateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-comment.md) mutation

```graphql
input DesUpdateCommentInput {
  commentId: String!
  commentThreadId: String!
  entityId: ID!
  text: String!
}
```

### Fields

#### `DesUpdateCommentInput.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for comment.

#### `DesUpdateCommentInput.commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for comment thread.

#### `DesUpdateCommentInput.entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Entity identifier for updating a comment.

#### `DesUpdateCommentInput.text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment text.
