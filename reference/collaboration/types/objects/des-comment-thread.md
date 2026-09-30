---
title: "DesCommentThread"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCommentThread

A comment thread contains an initial remark associated with the design and a collection of replies.

### Common Data Model

- [Comment Thread](https://altiumdeveloper.github.io/cdm/classes/col_CommentThread/) — Comment Thread represents a structured discussion linked to a specific design object, document, or workspace item, capturing feedback, decisions, and context directly within the collaborative design environment.
  - GRID: `grid:workspace:{workspace-id}:collaboration:comment-thread/{id}`

### Returned By

[`desCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-comment-thread.md) query · [`desCommentThreads`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-comment-threads.md) query

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object · [`DesSchematic`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-schematic.md) object

```graphql
type DesCommentThread {
  assignedTo: DesUser
  comments: [DesComment!]!
  commentThreadId: String!
  context: DesCommentContext!
  createdAt: DateTime!
  createdBy: DesUser!
  modifiedAt: DateTime!
  modifiedBy: DesUser!
  originalStateScreenshotUrl: String
  status: Int!
  threadNumber: Int!
}
```

### Fields

#### `DesCommentThread.assignedTo` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The account information for the owner of any action or response to this comment thread.

#### `DesCommentThread.comments` · [`[DesComment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) non-null object collaboration

The list of replies associated with this comment thread.

#### `DesCommentThread.commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this comment thread (used by `desCreateComment`, `desDeleteComment`, `desUpdateComment`).

#### `DesCommentThread.context` · [`DesCommentContext!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-context.md) non-null object collaboration

The information about properties related to this comment thread.

#### `DesCommentThread.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` for the creation of this comment thread.

#### `DesCommentThread.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The account information for who created this comment thread.

#### `DesCommentThread.modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` for the most recent modification of this comment thread.

#### `DesCommentThread.modifiedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The account information for who most recently modified this comment thread.

#### `DesCommentThread.originalStateScreenshotUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The web address to download the screenshot associated with the creation of this comment thread.

#### `DesCommentThread.status` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Comment thread status. 0 = \*Resolved\*, 1 = \*Active\*.

#### `DesCommentThread.threadNumber` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The sequence number of this comment thread.
