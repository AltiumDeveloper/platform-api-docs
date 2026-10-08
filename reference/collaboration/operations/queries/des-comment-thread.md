---
title: "desCommentThread"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-comment-thread"
bounded_context: "Collaboration"
kind: "queries"
experimental: false
deprecated: false
---

# desCommentThread

Search for a specific comment thread associated with a project.

### Type

#### [`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object

A comment thread contains an initial remark associated with the design and a collection of replies.

```graphql
desCommentThread(
  projectId: ID!
  threadId: String!
): DesCommentThread
```

### Arguments

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier (`DesProject.id`).

#### `threadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for a comment thread.
