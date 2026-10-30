---
title: "PlatformKeyValueStoreEntryExistsError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-exists-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntryExistsError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformKeyValueStoreAddError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-add-error.md) union

```graphql
type PlatformKeyValueStoreEntryExistsError implements Error {
  key: String!
  message: String!
}
```

### Fields

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
