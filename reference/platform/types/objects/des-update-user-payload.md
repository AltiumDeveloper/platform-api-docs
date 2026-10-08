---
title: "DesUpdateUserPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-user-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateUserPayload

Payload associated with updating a user.

### Returned By

[`desUpdateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-user.md) mutation

```graphql
type DesUpdateUserPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
