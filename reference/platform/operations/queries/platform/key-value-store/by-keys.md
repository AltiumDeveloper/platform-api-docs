---
title: "platform.keyValueStore.byKeys"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/by-keys"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.keyValueStore.byKeys

Gets up to 25 entries by key, returning null in the position of each missing entry.

### Type

#### [`PlatformKeyValueStoreEntry`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry.md) object

A value stored in the key-value store of an app installation, in the workspace of the access token.

```graphql
platform {
  keyValueStore {
    byKeys(
      keys: [String!]!
    ): [PlatformKeyValueStoreEntry]!
  }
}
```

### Arguments

#### `keys` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
