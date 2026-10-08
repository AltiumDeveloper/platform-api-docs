---
title: "SolSolutionSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-solution-sort-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolSolutionSortInput

A sorting input type for querying solutions. This class is used to specify sorting criteria when retrieving solutions, allowing clients to sort results by modified date or name in ascending or descending order. Only one sorting criterion can be applied at a time. If both are provided, the API will prioritize one of them.

### Member Of

[`solSolutionsByPagev2`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solutions-by-pagev-2.md) query

```graphql
input SolSolutionSortInput {
  modifiedAt: SortEnumType
  name: SortEnumType
}
```

### Fields

#### `modifiedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

A filter for sorting by the modified date of the solution. The value can be either "Asc" for ascending order or "Desc" for descending order.

#### `name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

A filter for sorting by the name of the solution. The value can be either "Asc" for ascending order or "Desc" for descending order.
