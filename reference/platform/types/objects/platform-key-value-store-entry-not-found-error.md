---
title: "PlatformKeyValueStoreEntryNotFoundError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-not-found-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntryNotFoundError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformKeyValueStoreUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-update-error.md) union

```graphql
type PlatformKeyValueStoreEntryNotFoundError implements Error {
  key: String!
  message: String!
}
```

### Fields

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
