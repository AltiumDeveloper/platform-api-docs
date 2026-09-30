---
title: "DesUpdateUserGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-user-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateUserGroupPayload

Payload associated with updating user group.

### Returned By

[`desUpdateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-user-group.md) mutation

```graphql
type DesUpdateUserGroupPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateUserGroupPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
