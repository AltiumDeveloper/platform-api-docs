---
title: "DesPartSearchFacetValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchFacetValue

Represents a search facet value.

### Member Of

[`DesPartGlobalSearchFixedFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-fixed-facets.md) object · [`DesPartSearchAttributeFacet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet.md) object · [`DesPartSearchFixedFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-fixed-facets.md) object

```graphql
type DesPartSearchFacetValue {
  count: Int!
  floatValue: Float
  value: String!
}
```

### Fields

#### `DesPartSearchFacetValue.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The parts count.

#### `DesPartSearchFacetValue.floatValue` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

The numeric value of the facet value.

#### `DesPartSearchFacetValue.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The facet value.
