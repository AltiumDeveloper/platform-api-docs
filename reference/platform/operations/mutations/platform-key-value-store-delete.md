---
title: "platformKeyValueStoreDelete"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-delete"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformKeyValueStoreDelete

Deletes an entry, succeeding without changes if it does not exist; \*isDeleted\* tells whether it existed. Requires the `platform:storage.write` scope.

### Type

#### [`PlatformKeyValueStoreDeletePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-delete-payload.md) object

```graphql
platformKeyValueStoreDelete(
  input: PlatformKeyValueStoreDeleteInput!
): PlatformKeyValueStoreDeletePayload!
```

### Arguments

#### `input` · [`PlatformKeyValueStoreDeleteInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-key-value-store-delete-input.md) non-null input
