---
title: "DesUpdateCommentThreadPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-update-comment-thread-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateCommentThreadPayload

Payload associated with updating a comment thread.

### Returned By

[`desUpdateCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-comment-thread.md) mutation

```graphql
type DesUpdateCommentThreadPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateCommentThreadPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
