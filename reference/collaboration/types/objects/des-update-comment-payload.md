---
title: "DesUpdateCommentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-update-comment-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateCommentPayload

Payload associated with updating a comment.

### Returned By

[`desUpdateComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-comment.md) mutation

```graphql
type DesUpdateCommentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
