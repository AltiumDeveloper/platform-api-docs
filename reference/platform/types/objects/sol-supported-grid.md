---
title: "SolSupportedGrid"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-supported-grid"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolSupportedGrid

### Returned By

[`solSupportedGrids`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-supported-grids.md) query

```graphql
type SolSupportedGrid {
  entityType: String!
  gridTemplate: String!
}
```

### Fields

#### `entityType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Entity type the grid template belongs to.

#### `gridTemplate` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Grid template of the entity type.
