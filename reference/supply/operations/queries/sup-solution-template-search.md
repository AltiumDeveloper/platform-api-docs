---
title: "supSolutionTemplateSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateSearch

Searches solution templates.

```graphql
supSolutionTemplateSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupSolutionTemplateSortInput!]
  where: SupSolutionTemplateSearchFilterInput
): SupSolutionTemplateConnection
```

### Arguments

#### `supSolutionTemplateSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supSolutionTemplateSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supSolutionTemplateSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supSolutionTemplateSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supSolutionTemplateSearch.order` · [`[SupSolutionTemplateSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-sort-input.md) list input supply

#### `supSolutionTemplateSearch.where` · [`SupSolutionTemplateSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-search-filter-input.md) input supply

### Type

#### [`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-connection.md) object supply

A connection to a list of items.
