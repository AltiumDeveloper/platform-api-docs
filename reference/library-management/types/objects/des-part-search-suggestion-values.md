---
title: "DesPartSearchSuggestionValues"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-suggestion-values"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchSuggestionValues

Represents the results of a part search suggestion request.

### Returned By

[`desPartSearchSuggestions`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-suggestions.md) query

```graphql
type DesPartSearchSuggestionValues {
  allAttributes: [DesPartAttribute!]!
  attributeFacets: [DesPartSearchAttributeFacet!]!
}
```

### Fields

#### `DesPartSearchSuggestionValues.allAttributes` · [`[DesPartAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object library-management

The list of all suggested attributes.

#### `DesPartSearchSuggestionValues.attributeFacets` · [`[DesPartSearchAttributeFacet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-attribute-facet.md) non-null object library-management

The list of suggested parameter facets.
