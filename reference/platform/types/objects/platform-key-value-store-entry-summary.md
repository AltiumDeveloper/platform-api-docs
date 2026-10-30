---
title: "PlatformKeyValueStoreEntrySummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntrySummary

Entry metadata returned by \*all\*, without the value.

### Member Of

[`PlatformKeyValueStoreEntrySummaryConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-connection.md) object · [`PlatformKeyValueStoreEntrySummaryEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-edge.md) object

```graphql
type PlatformKeyValueStoreEntrySummary {
  createdAt: DateTime!
  key: String!
  sizeBytes: Int!
  updatedAt: DateTime!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `sizeBytes` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar
