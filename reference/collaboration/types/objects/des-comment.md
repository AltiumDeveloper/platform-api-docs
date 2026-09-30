---
title: "DesComment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesComment

A comment is one of remarks associated with a comment thread or task.

### Common Data Model

- [Comment](https://altiumdeveloper.github.io/cdm/classes/col_Comment/)

### Member Of

[`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object · [`DesCreateTaskCommentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-comment-payload.md) object · [`DesTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) object

```graphql
type DesComment {
  commentId: String!
  createdAt: DateTime!
  createdBy: DesUser!
  mentions: [DesMention!]!
  modifiedAt: DateTime!
  modifiedBy: DesUser!
  text: String!
}
```

### Fields

#### `DesComment.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The comment reference identifier.

#### `DesComment.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The creation date.

#### `DesComment.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user who created the comment.

#### `DesComment.mentions` · [`[DesMention!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-mention.md) non-null object collaboration

The users mentioned by this comment.

#### `DesComment.modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last modification date.

#### `DesComment.modifiedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user who modified the comment.

#### `DesComment.text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The comment text.
