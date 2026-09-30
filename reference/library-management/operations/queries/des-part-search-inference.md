---
title: "desPartSearchInference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-inference"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartSearchInference

Infers part search criteria from a keyword.

```graphql
desPartSearchInference(
  where: DesPartSearchInferenceFilterInput!
): DesPartSearchInferenceResult!
```

### Arguments

#### `desPartSearchInference.where` · [`DesPartSearchInferenceFilterInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-inference-filter-input.md) non-null input library-management

The filter to use for search inference.

### Type

#### [`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object library-management

Represents inferred part search criteria.
