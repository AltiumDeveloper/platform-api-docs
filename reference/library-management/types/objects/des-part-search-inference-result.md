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

#### `attributes` · [`[DesPartSearchInferenceSuggestedAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-suggested-attribute.md) non-null object

Attributes inferred for this query.

#### `category` · [`DesPartCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) object

Category inferred for this query.

#### `manufacturer` · [`DesPartCompany`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) object

Manufacturer inferred for this query.

#### `normalizedQuery` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Normalized original query string used for inference.

#### `strippedQuery` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Query string with inferred terms removed.

#### `strippedSpans` · [`[DesPartSearchInferenceStrippedSpan!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-stripped-span.md) non-null object

Positions of removed inferred terms mapped to attribute short names.

#### `suggestedCategories` · [`[DesPartSearchInferenceCategorySuggestion!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-category-suggestion.md) non-null object

Category suggestions related to this query.
