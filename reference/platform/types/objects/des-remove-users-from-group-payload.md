---
title: "DesRemoveUsersFromGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-remove-users-from-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRemoveUsersFromGroupPayload

Payload associated with removing users from a group.

### Returned By

[`desRemoveUsersFromGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-remove-users-from-group.md) mutation

```graphql
type DesRemoveUsersFromGroupPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesRemoveUsersFromGroupPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
