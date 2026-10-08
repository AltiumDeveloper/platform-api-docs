---
title: "SupRefDesignOrderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-order-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupRefDesignOrderInput

Input for ordering reference designs by one or more fields.

### Member Of

[`supRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs.md) query

```graphql
input SupRefDesignOrderInput {
  createdAt: SupRefSortDirection
  releaseDate: SupRefSortDirection
  stableName: SupRefSortDirection
  subtitle: SupRefSortDirection
  title: SupRefSortDirection
  type: SupRefSortDirection
  updatedAt: SupRefSortDirection
}
```

### Fields

#### `createdAt` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by creation date in the specified direction.

#### `releaseDate` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by release date in the specified direction.

#### `stableName` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by stable name in the specified direction.

#### `subtitle` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by subtitle in the specified direction.

#### `title` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by title in the specified direction.

#### `type` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by type in the specified direction.

#### `updatedAt` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-sort-direction.md) enum

Sort by last update date in the specified direction.
