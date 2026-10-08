---
title: "DesPartSearchInferenceCategorySuggestion"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-category-suggestion"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchInferenceCategorySuggestion

Represents a suggested category for an inferred search.

### Member Of

[`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object

```graphql
type DesPartSearchInferenceCategorySuggestion {
  category: DesPartCategory!
  count: Int!
}
```

### Fields

#### `category` · [`DesPartCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) non-null object

The suggested category.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The estimated parts count for this category.
