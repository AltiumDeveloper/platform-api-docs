---
title: "DesCreateUserPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-create-user-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateUserPayload

Payload associated with creating a user.

### Returned By

[`desCreateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-user.md) mutation

```graphql
type DesCreateUserPayload {
  userId: String!
}
```

### Fields

#### `DesCreateUserPayload.userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Workspace user identifier.
