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

- [Comment Thread](https://w3id.org/altium/cdm/collaboration/CommentThread) — Comment Thread represents a structured discussion linked to a specific design object, document, or workspace item, capturing feedback, decisions, and context directly within the collaborative design environment.

  - IRI: [`https://w3id.org/altium/cdm/collaboration/CommentThread`](https://w3id.org/altium/cdm/collaboration/CommentThread)
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

#### `assignedTo` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object Platform

The account information for the owner of any action or response to this comment thread.

#### `comments` · [`[DesComment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) non-null object

The list of replies associated with this comment thread.

#### `commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this comment thread (used by [`desCreateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-comment.md), [`desDeleteComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-comment.md), [`desUpdateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-comment.md)).

#### `context` · [`DesCommentContext!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-context.md) non-null object

The information about properties related to this comment thread.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the creation of this comment thread.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The account information for who created this comment thread.

#### `modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the most recent modification of this comment thread.

#### `modifiedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The account information for who most recently modified this comment thread.

#### `originalStateScreenshotUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The web address to download the screenshot associated with the creation of this comment thread.

#### `status` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Comment thread status. 0 = \*Resolved\*, 1 = \*Active\*.

#### `threadNumber` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The sequence number of this comment thread.
