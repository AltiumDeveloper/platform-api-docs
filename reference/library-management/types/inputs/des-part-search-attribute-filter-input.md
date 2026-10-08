---
title: "DesPartSearchAttributeFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchAttributeFilterInput

Represents the filter for searching by attribute.

### Member Of

[`DesPartGlobalSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-filter-input.md) input · [`DesPartSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input.md) input · [`DesPartSearchInferenceFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-inference-filter-input.md) input

```graphql
input DesPartSearchAttributeFilterInput {
  attributeId: String!
  values: [String!]!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the attribute.

#### `values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The values of the attribute.
