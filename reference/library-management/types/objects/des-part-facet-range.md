---
title: "DesPartFacetRange"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-facet-range"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartFacetRange

Represents a facet range.

### Member Of

[`DesPartSearchAttributeFacet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet.md) object

```graphql
type DesPartFacetRange {
  from: String!
  to: String!
}
```

### Fields

#### `DesPartFacetRange.from` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The start of the range.

#### `DesPartFacetRange.to` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The end of the range.
