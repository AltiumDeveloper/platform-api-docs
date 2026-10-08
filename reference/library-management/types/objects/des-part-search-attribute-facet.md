---
title: "DesPartSearchAttributeFacet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchAttributeFacet

Represents an attribute facet.

### Member Of

[`DesPartGlobalSearchFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-facets.md) object · [`DesPartSearchFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facets.md) object · [`DesPartSearchSuggestionValues`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-suggestion-values.md) object

```graphql
type DesPartSearchAttributeFacet {
  attributeId: String!
  range: DesPartFacetRange
  values: [DesPartSearchFacetValue!]!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the attribute.

#### `range` · [`DesPartFacetRange`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-facet-range.md) object

The range of the facet.

#### `values` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The values of the facet.
