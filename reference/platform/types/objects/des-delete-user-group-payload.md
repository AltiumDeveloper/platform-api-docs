---
title: "DesDeleteUserGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-delete-user-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteUserGroupPayload

Payload associated with deleting a user group.

### Returned By

[`desDeleteUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-user-group.md) mutation

```graphql
type DesDeleteUserGroupPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesDeleteUserGroupPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
