---
title: "DesCreateTaskCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateTaskCommentPayload

Payload associated with creating a task comment.

### Returned By

[`desCreateTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-task-comment.md) mutation

```graphql
type DesCreateTaskCommentPayload {
  comment: DesComment
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesCreateTaskCommentPayload.comment` · [`DesComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) object collaboration

Task comment.

#### `DesCreateTaskCommentPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
