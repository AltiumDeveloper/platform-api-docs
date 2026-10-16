---
title: "platform.keyValueStore.all"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/all"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.keyValueStore.all

Gets entry summaries without values, ordered by key; \*prefix\* limits the results to keys starting with it.

### Type

#### [`PlatformKeyValueStoreEntrySummaryConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-connection.md) object

A connection to a list of items.

```graphql
platform {
  keyValueStore {
    all(
      after: String
      first: Int
      prefix: String
    ): PlatformKeyValueStoreEntrySummaryConnection!
  }
}
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `prefix` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
