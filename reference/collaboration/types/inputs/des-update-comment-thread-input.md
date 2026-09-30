---
title: "DesUpdateCommentThreadInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-comment-thread-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateCommentThreadInput

Input for updating a comment thread.

### Member Of

[`desUpdateCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-comment-thread.md) mutation

```graphql
input DesUpdateCommentThreadInput {
  commentThreadId: String!
  entityId: ID!
  status: DesCommentThreadStatus!
}
```

### Fields

#### `DesUpdateCommentThreadInput.commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread identifier.

#### `DesUpdateCommentThreadInput.entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Entity identifier.

#### `DesUpdateCommentThreadInput.status` · [`DesCommentThreadStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-comment-thread-status.md) non-null enum collaboration

Comment thread status.
