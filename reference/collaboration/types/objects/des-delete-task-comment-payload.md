---
title: "DesDeleteTaskCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-delete-task-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteTaskCommentPayload

Payload associated with deleting a task comment.

### Returned By

[`desDeleteTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-task-comment.md) mutation

```graphql
type DesDeleteTaskCommentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesDeleteTaskCommentPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
