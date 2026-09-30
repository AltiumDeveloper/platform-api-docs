---
title: "desCommentThreads"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-comment-threads"
bounded_context: "Collaboration"
kind: "queries"
experimental: false
deprecated: false
---

# desCommentThreads

Search for comment threads associated with a project.

```graphql
desCommentThreads(
  projectId: ID!
): [DesCommentThread!]!
```

### Arguments

#### `desCommentThreads.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project identifier (`DesProject.id`).

### Type

#### [`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object collaboration

A comment thread contains an initial remark associated with the design and a collection of replies.
