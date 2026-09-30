---
title: "solSolutionsByPage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/sol-solutions-by-page"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: true
---

# solSolutionsByPage

> **Deprecated:** Use solSolutionsByPagev2 query

Gets all available solutions with pagination.

```graphql
solSolutionsByPage(
  pageNumber: Int!
  pageSize: Int!
): [SolSolution!]! @deprecated
```

### Arguments

#### `solSolutionsByPage.pageNumber` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `solSolutionsByPage.pageSize` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

### Type

#### [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object platform
