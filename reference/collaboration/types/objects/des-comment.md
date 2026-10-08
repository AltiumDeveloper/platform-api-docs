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

- [Comment](https://w3id.org/altium/cdm/collaboration/Comment) — A single entry in a comment thread: either the initial comment, pinned to a point, an object or an area of a design document (or to a BOM line), or a reply to it. A comment can mention people or groups using @, and it can be assigned to a Workspace member as a task, either when it is posted or later by converting it. Only the author can edit or delete a comment, and deleting the initial comment also deletes its replies.
  - IRI: [`https://w3id.org/altium/cdm/collaboration/Comment`](https://w3id.org/altium/cdm/collaboration/Comment)

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

#### `commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The comment reference identifier.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user who created the comment.

#### `mentions` · [`[DesMention!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-mention.md) non-null object

The users mentioned by this comment.

#### `modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last modification date.

#### `modifiedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user who modified the comment.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The comment text.
