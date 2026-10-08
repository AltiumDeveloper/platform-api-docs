---
title: "DesDeleteCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-delete-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteCommentPayload

Payload associated with deleting a comment.

### Returned By

[`desDeleteComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-comment.md) mutation

```graphql
type DesDeleteCommentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
