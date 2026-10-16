---
title: "PlatformKeyValueStoreUpdateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-key-value-store-update-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreUpdateInput

### Member Of

[`platformKeyValueStoreUpdate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-key-value-store-update.md) mutation

```graphql
input PlatformKeyValueStoreUpdateInput {
  key: String!
  value: String!
}
```

### Fields

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Key of 1 to 256 characters from \*A-Z a-z 0-9 . \_ - /\*, case-insensitive. \*/\* separates segments, which must be non-empty, must not end with \*.\* and must not be \*.\*, \*..\* or a reserved device name such as \*con\*.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Value of at most 16 \*KiB\* when UTF-8 encoded.
