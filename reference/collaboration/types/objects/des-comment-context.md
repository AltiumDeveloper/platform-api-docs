---
title: "DesCommentContext"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-context"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCommentContext

A comment context provides additional information about associations for a comment thread.

### Member Of

[`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object

```graphql
type DesCommentContext {
  area: DesRectangle!
  documentId: String
  objectId: String
  releaseId: String
}
```

### Fields

#### `DesCommentContext.area` · [`DesRectangle!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) non-null object design

The area associated with a comment thread.

#### `DesCommentContext.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The reference identifier for the document associated with a comment thread.

#### `DesCommentContext.objectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The reference identifier for an object associated with a comment thread.

#### `DesCommentContext.releaseId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The release identifier associated with a comment thread.
