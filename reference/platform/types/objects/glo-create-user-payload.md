---
title: "GloCreateUserPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-user-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloCreateUserPayload

Represents output value for creating new user.

### Returned By

[`gloCreateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-user.md) mutation

```graphql
type GloCreateUserPayload {
  userId: String
}
```

### Fields

#### `GloCreateUserPayload.userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User identifier.
