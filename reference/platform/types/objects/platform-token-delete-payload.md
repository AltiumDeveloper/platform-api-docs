---
title: "PlatformTokenDeletePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenDeletePayload

### Returned By

[`platformTokenDelete`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-delete.md) mutation

```graphql
type PlatformTokenDeletePayload {
  errors: [PlatformTokenDeleteError!]
  tokenId: String
}
```

### Fields

#### `errors` · [`[PlatformTokenDeleteError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-delete-error.md) list union

#### `tokenId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
