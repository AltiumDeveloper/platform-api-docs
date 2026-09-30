---
title: "DesPartSearchFixedFacets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-fixed-facets"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchFixedFacets

Represents fixed search facets.

### Member Of

[`DesPartSearchFacets`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facets.md) object

```graphql
type DesPartSearchFixedFacets {
  categoryNames: [DesPartSearchFacetValue!]!
  hasBomOrProjectUsages: [DesPartSearchFacetValue!]!
  manufacturerNames: [DesPartSearchFacetValue!]!
  overallHealthCheckStatuses: [DesPartSearchFacetValue!]!
  tags: [DesPartSearchFacetValue!]!
}
```

### Fields

#### `DesPartSearchFixedFacets.categoryNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The category names.

#### `DesPartSearchFixedFacets.hasBomOrProjectUsages` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

Indicates if the part has BOM or project usages.

#### `DesPartSearchFixedFacets.manufacturerNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The manufacturer names.

#### `DesPartSearchFixedFacets.overallHealthCheckStatuses` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The overall health check statuses.

#### `DesPartSearchFixedFacets.tags` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object library-management

The tags. Not calculated yet, so it is always empty.
