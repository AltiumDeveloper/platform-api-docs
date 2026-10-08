---
title: "DesCreateCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateCommentPayload

Payload associated with creating a comment.

### Returned By

[`desCreateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-comment.md) mutation

```graphql
type DesCreateCommentPayload {
  commentId: String!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment identifier.

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
