---
title: "DesUpdateReuseBlockPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-reuse-block-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateReuseBlockPayload

Payload associated with updating a reuse block.

### Returned By

[`desUpdateReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-reuse-block.md) mutation

```graphql
type DesUpdateReuseBlockPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateReuseBlockPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
