---
title: "solSolutionsByPagev2"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solutions-by-pagev-2"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# solSolutionsByPagev2

Gets all available solutions with pagination.

### Type

#### [`SolSolutionsByPagePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solutions-by-page-payload.md) object

```graphql
solSolutionsByPagev2(
  order: SolSolutionSortInput
  pageNumber: Int!
  pageSize: Int!
  where: SolSolutionFilterInput
): SolSolutionsByPagePayload!
```

### Arguments

#### `order` · [`SolSolutionSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-solution-sort-input.md) input

#### `pageNumber` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `pageSize` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `where` · [`SolSolutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-solution-filter-input.md) input
