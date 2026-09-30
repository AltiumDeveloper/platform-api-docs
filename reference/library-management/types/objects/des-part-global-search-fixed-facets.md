---
title: "DesPartGlobalSearchFixedFacets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-fixed-facets"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalSearchFixedFacets

Represents fixed search facets.

### Member Of

[`DesPartGlobalSearchFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-facets.md) object

```graphql
type DesPartGlobalSearchFixedFacets {
  categoryNames: [DesPartSearchFacetValue!]!
  manufacturerNames: [DesPartSearchFacetValue!]!
}
```

### Fields

#### `DesPartGlobalSearchFixedFacets.categoryNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The category names.

#### `DesPartGlobalSearchFixedFacets.manufacturerNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The manufacturer names.
