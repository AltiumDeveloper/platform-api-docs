---
title: "PlatformKeyValueStoreAddPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-add-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreAddPayload

### Returned By

[`platformKeyValueStoreAdd`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-add.md) mutation

```graphql
type PlatformKeyValueStoreAddPayload {
  entry: PlatformKeyValueStoreEntry
  errors: [PlatformKeyValueStoreAddError!]
}
```

### Fields

#### `entry` · [`PlatformKeyValueStoreEntry`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry.md) object

#### `errors` · [`[PlatformKeyValueStoreAddError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-add-error.md) list union
