---
title: "supSolutionTemplateApplicationsSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateApplicationsSearch

Searches solution template applications.

```graphql
supSolutionTemplateApplicationsSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupSolutionTemplateApplicationSortInput!]
  where: SupSolutionTemplateApplicationSearchFilterInput
): SupSolutionTemplateApplicationConnection
```

### Arguments

#### `supSolutionTemplateApplicationsSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supSolutionTemplateApplicationsSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supSolutionTemplateApplicationsSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supSolutionTemplateApplicationsSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supSolutionTemplateApplicationsSearch.order` · [`[SupSolutionTemplateApplicationSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-sort-input.md) list input supply

#### `supSolutionTemplateApplicationsSearch.where` · [`SupSolutionTemplateApplicationSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-search-filter-input.md) input supply

### Type

#### [`SupSolutionTemplateApplicationConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-connection.md) object supply

A connection to a list of items.
