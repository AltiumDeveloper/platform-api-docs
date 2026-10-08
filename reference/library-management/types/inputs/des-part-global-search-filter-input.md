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

#### `attributes` · [`[DesPartSearchAttributeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input.md) list input

A collection of attribute filters to search by.

#### `categoryName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of category names to search by.

#### `hasCADModelOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether to filter parts that have a CAD models.

#### `hasDatasheetOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether to filter parts that have a datasheets.

#### `inStockOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether to filter parts that are in stock.

#### `keyword` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The keyword to search for.

#### `manufacturerName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of manufacturer names to search by.
