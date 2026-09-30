---
title: "DesPartSearchFacets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facets"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchFacets

Represents the search facets.

### Member Of

[`DesPartSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection.md) object

```graphql
type DesPartSearchFacets {
  attributeFacets: [DesPartSearchAttributeFacet!]!
  fixedFacets: DesPartSearchFixedFacets!
}
```

### Fields

#### `DesPartSearchFacets.attributeFacets` · [`[DesPartSearchAttributeFacet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet.md) non-null object library-management

The attribute facets.

#### `DesPartSearchFacets.fixedFacets` · [`DesPartSearchFixedFacets!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-fixed-facets.md) non-null object library-management

The fixed facets.
