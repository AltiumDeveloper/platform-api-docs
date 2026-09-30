---
title: "supRefDesignByName"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-design-by-name"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesignByName

Search a specific reference design by its unique name.

```graphql
supRefDesignByName(
  name: String!
): SupRefDesign
```

### Arguments

#### `supRefDesignByName.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object supply

A reference design model aggregates the relevant documents, files and parts.
