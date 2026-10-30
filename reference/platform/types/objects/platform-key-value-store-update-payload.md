---
title: "PlatformKeyValueStoreUpdatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-update-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreUpdatePayload

### Returned By

[`platformKeyValueStoreUpdate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-update.md) mutation

```graphql
type PlatformKeyValueStoreUpdatePayload {
  entry: PlatformKeyValueStoreEntry
  errors: [PlatformKeyValueStoreUpdateError!]
}
```

### Fields

#### `entry` · [`PlatformKeyValueStoreEntry`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry.md) object

#### `errors` · [`[PlatformKeyValueStoreUpdateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-update-error.md) list union
