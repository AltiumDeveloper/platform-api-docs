---
title: "PlatformKeyValueStoreEntrySummaryEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntrySummaryEdge

An edge in a connection.

### Member Of

[`PlatformKeyValueStoreEntrySummaryConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-connection.md) object

```graphql
type PlatformKeyValueStoreEntrySummaryEdge {
  cursor: String!
  node: PlatformKeyValueStoreEntrySummary!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`PlatformKeyValueStoreEntrySummary!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary.md) non-null object

The item at the end of the edge.
