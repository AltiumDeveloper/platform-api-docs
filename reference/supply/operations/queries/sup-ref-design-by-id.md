---
title: "supRefDesignById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-design-by-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesignById

Search a specific reference design by its unique identifier.

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

A reference design model aggregates the relevant documents, files and parts.

```graphql
supRefDesignById(
  id: ID!
): SupRefDesign
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
