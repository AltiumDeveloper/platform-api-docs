---
title: "DesAddUsersToGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-add-users-to-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesAddUsersToGroupPayload

Payload associated with adding users to group.

### Returned By

[`desAddUsersToGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-add-users-to-group.md) mutation

```graphql
type DesAddUsersToGroupPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesAddUsersToGroupPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
