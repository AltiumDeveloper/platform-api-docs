---
title: "PlatformKeyValueStoreDeletePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-delete-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreDeletePayload

### Returned By

[`platformKeyValueStoreDelete`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-delete.md) mutation

```graphql
type PlatformKeyValueStoreDeletePayload {
  errors: [PlatformKeyValueStoreDeleteError!]
  isDeleted: Boolean
}
```

### Fields

#### `errors` · [`[PlatformKeyValueStoreDeleteError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-delete-error.md) list union

#### `isDeleted` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar
