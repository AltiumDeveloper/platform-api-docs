---
title: "DesPartSearchInferenceResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchInferenceResult

Represents inferred part search criteria.

### Returned By

[`desPartSearchInference`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-inference.md) query

```graphql
type DesPartSearchInferenceResult {
  attributes: [DesPartSearchInferenceSuggestedAttribute!]!
  category: DesPartCategory
  manufacturer: DesPartCompany
  normalizedQuery: String!
  strippedQuery: String!
  strippedSpans: [DesPartSearchInferenceStrippedSpan!]!
  suggestedCategories: [DesPartSearchInferenceCategorySuggestion!]!
}
```

### Fields

#### `DesPartSearchInferenceResult.attributes` · [`[DesPartSearchInferenceSuggestedAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-suggested-attribute.md) non-null object library-management

Attributes inferred for this query.

#### `DesPartSearchInferenceResult.category` · [`DesPartCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) object library-management

Category inferred for this query.

#### `DesPartSearchInferenceResult.manufacturer` · [`DesPartCompany`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) object library-management

Manufacturer inferred for this query.

#### `DesPartSearchInferenceResult.normalizedQuery` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Normalized original query string used for inference.

#### `DesPartSearchInferenceResult.strippedQuery` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Query string with inferred terms removed.

#### `DesPartSearchInferenceResult.strippedSpans` · [`[DesPartSearchInferenceStrippedSpan!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-stripped-span.md) non-null object library-management

Positions of removed inferred terms mapped to attribute short names.

#### `DesPartSearchInferenceResult.suggestedCategories` · [`[DesPartSearchInferenceCategorySuggestion!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-category-suggestion.md) non-null object library-management

Category suggestions related to this query.
