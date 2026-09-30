---
title: "DesUpdateTaskCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-update-task-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateTaskCommentPayload

Payload associated with updating a task comment.

### Returned By

[`desUpdateTaskComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-task-comment.md) mutation

```graphql
type DesUpdateTaskCommentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateTaskCommentPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
