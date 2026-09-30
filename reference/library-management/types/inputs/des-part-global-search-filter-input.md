---
title: "DesPartGlobalSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartGlobalSearchFilterInput

Represents the filter for global searching parts.

### Member Of

[`desPartGlobalSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-search.md) query

```graphql
input DesPartGlobalSearchFilterInput {
  attributes: [DesPartSearchAttributeFilterInput!]
  categoryName: [String!]
  hasCADModelOnly: Boolean
  hasDatasheetOnly: Boolean
  inStockOnly: Boolean
  keyword: String
  manufacturerName: [String!]
}
```

### Fields

#### `DesPartGlobalSearchFilterInput.attributes` · [`[DesPartSearchAttributeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input.md) list input library-management

A collection of attribute filters to search by.

#### `DesPartGlobalSearchFilterInput.categoryName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of category names to search by.

#### `DesPartGlobalSearchFilterInput.hasCADModelOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether to filter parts that have a CAD models.

#### `DesPartGlobalSearchFilterInput.hasDatasheetOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether to filter parts that have a datasheets.

#### `DesPartGlobalSearchFilterInput.inStockOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether to filter parts that are in stock.

#### `DesPartGlobalSearchFilterInput.keyword` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The keyword to search for.

#### `DesPartGlobalSearchFilterInput.manufacturerName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of manufacturer names to search by.
