---
title: "platformKeyValueStoreUpdate"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-update"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformKeyValueStoreUpdate

Replaces the value of an existing entry, failing if it does not exist; the last write wins. Requires the `platform:storage.write` scope.

### Type

#### [`PlatformKeyValueStoreUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-update-payload.md) object

```graphql
platformKeyValueStoreUpdate(
  input: PlatformKeyValueStoreUpdateInput!
): PlatformKeyValueStoreUpdatePayload!
```

### Arguments

#### `input` · [`PlatformKeyValueStoreUpdateInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-key-value-store-update-input.md) non-null input
