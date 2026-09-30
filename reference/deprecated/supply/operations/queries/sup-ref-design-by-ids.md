---
title: "supRefDesignByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/supply/operations/queries/sup-ref-design-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: true
---

# supRefDesignByIds

> **Deprecated:** Use 'supRefDesignsByIds' instead.

Search a specific reference designs by its unique identifiers.

```graphql
supRefDesignByIds(
  ids: [ID!]!
): [SupRefDesign!] @deprecated
```

### Arguments

#### `supRefDesignByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object supply

A reference design model aggregates the relevant documents, files and parts.
