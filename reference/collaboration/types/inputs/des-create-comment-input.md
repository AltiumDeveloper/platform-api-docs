---
title: "DesCreateCommentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateCommentInput

Input for comment creation.

### Member Of

[`desCreateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-comment.md) mutation

```graphql
input DesCreateCommentInput {
  commentThreadId: String!
  entityId: ID!
  mentions: [DesMentionInput!]
  text: String!
}
```

### Fields

#### `commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread identifier.

#### `entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Comment entity identifier.

#### `mentions` · [`[DesMentionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-mention-input.md) list input

User or group mentions to add to the comment. Omit to create a comment without mentions.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment text.
