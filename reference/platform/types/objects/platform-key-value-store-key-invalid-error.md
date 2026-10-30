---
title: "PlatformKeyValueStoreKeyInvalidError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-key-invalid-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreKeyInvalidError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformKeyValueStoreAddError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-add-error.md) union · [`PlatformKeyValueStoreDeleteError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-delete-error.md) union · [`PlatformKeyValueStoreUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-update-error.md) union

```graphql
type PlatformKeyValueStoreKeyInvalidError implements Error {
  key: String!
  message: String!
}
```

### Fields

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
