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

#### `DesPartSearchAttributeFacet.attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the attribute.

#### `DesPartSearchAttributeFacet.range` · [`DesPartFacetRange`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-facet-range.md) object library-management

The range of the facet.

#### `DesPartSearchAttributeFacet.values` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The values of the facet.
