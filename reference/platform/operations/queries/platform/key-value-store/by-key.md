---
title: "platform.keyValueStore.byKey"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/by-key"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.keyValueStore.byKey

Gets the entry with the given key, or null if it does not exist.

### Type

#### [`PlatformKeyValueStoreEntry`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry.md) object

A value stored in the key-value store of an app installation, in the workspace of the access token.

```graphql
platform {
  keyValueStore {
    byKey(
      key: String!
    ): PlatformKeyValueStoreEntry
  }
}
```

### Arguments

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
