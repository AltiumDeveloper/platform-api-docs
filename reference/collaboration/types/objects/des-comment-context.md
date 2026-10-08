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

#### `area` · [`DesRectangle!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) non-null object Design

The area associated with a comment thread.

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The reference identifier for the document associated with a comment thread.

#### `objectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The reference identifier for an object associated with a comment thread.

#### `releaseId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The release identifier associated with a comment thread.
