---
title: "DesCreateUserGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-create-user-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateUserGroupPayload

Payload associated with creating a user group.

### Returned By

[`desCreateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-user-group.md) mutation

```graphql
type DesCreateUserGroupPayload {
  userGroupId: String!
}
```

### Fields

#### `userGroupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

User group reference identifier.
