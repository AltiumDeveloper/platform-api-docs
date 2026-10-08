---
title: "DesDeleteCommentThreadPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-delete-comment-thread-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteCommentThreadPayload

Payload associated with deleting a comment thread.

### Returned By

[`desDeleteCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-comment-thread.md) mutation

```graphql
type DesDeleteCommentThreadPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
