---
title: "DesPartGlobalSearchFacets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-facets"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalSearchFacets

Represents the search facets.

### Member Of

[`DesPartGlobalSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection.md) object

```graphql
type DesPartGlobalSearchFacets {
  attributeFacets: [DesPartSearchAttributeFacet!]!
  fixedFacets: DesPartGlobalSearchFixedFacets!
}
```

### Fields

#### `attributeFacets` · [`[DesPartSearchAttributeFacet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet.md) non-null object

The attribute facets.

#### `fixedFacets` · [`DesPartGlobalSearchFixedFacets!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-fixed-facets.md) non-null object

The fixed facets.
