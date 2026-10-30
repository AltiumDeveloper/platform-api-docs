---
title: "DesMentionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-mention-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesMentionInput

A user or group mention operation in a comment.

### Member Of

[`DesCreateCommentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-input.md) input · [`DesCreateCommentThreadInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-thread-input.md) input · [`DesUpdateCommentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-comment-input.md) input

```graphql
input DesMentionInput {
  mentionGuid: String!
  mentionType: DesMentionType!
  operationType: DesMentionOperationType!
}
```

### Fields

#### `mentionGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The workspace user or group GUID, not an encoded GraphQL identifier.

#### `mentionType` · [`DesMentionType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-mention-type.md) non-null enum

The type of the mentioned entity.

#### `operationType` · [`DesMentionOperationType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-mention-operation-type.md) non-null enum

The mention operation. Use ADD when creating a comment; updates support ADD and REMOVE.
