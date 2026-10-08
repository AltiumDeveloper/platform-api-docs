---
title: "SupSolutionTemplateApplicationSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-sort-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationSortInput

Input type for solution template application sorting.

### Member Of

[`supSolutionTemplateApplicationsSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications-search.md) query

```graphql
input SupSolutionTemplateApplicationSortInput {
  createdAt: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by creation date.

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by last update date.
