---
title: "platformKeyValueStoreAdd"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-add"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformKeyValueStoreAdd

Adds an entry and fails if the key already exists. Requires the `platform:storage.write` scope.

### Type

#### [`PlatformKeyValueStoreAddPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-add-payload.md) object

```graphql
platformKeyValueStoreAdd(
  input: PlatformKeyValueStoreAddInput!
): PlatformKeyValueStoreAddPayload!
```

### Arguments

#### `input` · [`PlatformKeyValueStoreAddInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-key-value-store-add-input.md) non-null input
