---
title: "DesDeleteUserPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-delete-user-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteUserPayload

Payload associated with deleting a user.

### Returned By

[`desDeleteUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-user.md) mutation

```graphql
type DesDeleteUserPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesDeleteUserPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
