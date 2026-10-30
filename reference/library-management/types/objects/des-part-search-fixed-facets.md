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
  hasComponentsUsages: [DesPartSearchFacetValue!]!
  lifecycleStates: [DesPartSearchFacetValue!]!
  manufacturerNames: [DesPartSearchFacetValue!]!
  overallHealthCheckStatuses: [DesPartSearchFacetValue!]!
  tags: [DesPartSearchFacetValue!]!
}
```

### Fields

#### `categoryNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The category names.

#### `hasBomOrProjectUsages` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

Indicates if the part has BOM or project usages.

#### `hasComponentsUsages` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

Indicates if the part is used in components.

#### `lifecycleStates` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The lifecycle state names. Not calculated yet, so it is always empty.

#### `manufacturerNames` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The manufacturer names.

#### `overallHealthCheckStatuses` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The overall health check statuses.

#### `tags` · [`[DesPartSearchFacetValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facet-value.md) non-null object

The tag names. Not calculated yet, so it is always empty.
