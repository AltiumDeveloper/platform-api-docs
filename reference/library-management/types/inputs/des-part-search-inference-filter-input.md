---
title: "DesPartSearchInferenceFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-inference-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchInferenceFilterInput

Filter for inferring part search criteria from a keyword.

### Member Of

[`desPartSearchInference`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-inference.md) query

```graphql
input DesPartSearchInferenceFilterInput {
  attributes: [DesPartSearchAttributeFilterInput!]
  categories: [String!]
  inStockOnly: Boolean
  keyword: String!
  manufacturers: [String!]
}
```

### Fields

#### `attributes` · [`[DesPartSearchAttributeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input.md) list input

A collection of attribute filters to search by.

#### `categories` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of category names to search by.

#### `inStockOnly` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether to filter parts that are in stock.

#### `keyword` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The keyword to infer search criteria from.

#### `manufacturers` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of manufacturer names to search by.
