---
title: "PlatformKeyValueStoreQuotaExceededError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-quota-exceeded-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreQuotaExceededError

Returned when adding the entry, or growing its value, would exceed the installation's quota.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformKeyValueStoreAddError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-add-error.md) union · [`PlatformKeyValueStoreUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-update-error.md) union

```graphql
type PlatformKeyValueStoreQuotaExceededError implements Error {
  maxEntryCount: Int!
  maxTotalSizeBytes: Int!
  message: String!
}
```

### Fields

#### `maxEntryCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `maxTotalSizeBytes` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
