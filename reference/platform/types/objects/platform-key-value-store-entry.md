---
title: "PlatformKeyValueStoreEntry"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntry

A value stored in the key-value store of an app installation, in the workspace of the access token.

### Returned By

[`platform.keyValueStore.byKey`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/by-key.md) query · [`platform.keyValueStore.byKeys`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/by-keys.md) query

### Member Of

[`PlatformKeyValueStoreAddPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-add-payload.md) object · [`PlatformKeyValueStoreUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-update-payload.md) object

```graphql
type PlatformKeyValueStoreEntry {
  createdAt: DateTime!
  key: String!
  sizeBytes: Int!
  updatedAt: DateTime!
  value: String!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Time the entry was created.

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Key chosen by the app, unique within the app installation.

#### `sizeBytes` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Size of the value in bytes when UTF-8 encoded.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Time of the last write.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Stored value, at most 16 \*KiB\* when UTF-8 encoded.
