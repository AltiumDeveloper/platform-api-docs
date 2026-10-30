---
title: "PlatformKeyValueStoreEntrySummaryConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreEntrySummaryConnection

A connection to a list of items.

### Returned By

[`platform.keyValueStore.all`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/key-value-store/all.md) query

```graphql
type PlatformKeyValueStoreEntrySummaryConnection {
  edges: [PlatformKeyValueStoreEntrySummaryEdge!]
  nodes: [PlatformKeyValueStoreEntrySummary!]
  pageInfo: PageInfo!
}
```

### Fields

#### `edges` · [`[PlatformKeyValueStoreEntrySummaryEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary-edge.md) list object

A list of edges.

#### `nodes` · [`[PlatformKeyValueStoreEntrySummary!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-summary.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.
