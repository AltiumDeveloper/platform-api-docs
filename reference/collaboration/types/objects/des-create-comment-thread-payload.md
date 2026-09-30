---
title: "DesCreateCommentThreadPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-comment-thread-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateCommentThreadPayload

Payload associated with creating a comment thread.

### Returned By

[`desCreateCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-comment-thread.md) mutation

```graphql
type DesCreateCommentThreadPayload {
  commentId: String!
  commentThreadId: String!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesCreateCommentThreadPayload.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment identifier.

#### `DesCreateCommentThreadPayload.commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread identifier.

#### `DesCreateCommentThreadPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
