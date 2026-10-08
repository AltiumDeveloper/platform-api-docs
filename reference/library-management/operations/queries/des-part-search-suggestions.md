---
title: "desPartSearchSuggestions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-suggestions"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartSearchSuggestions

Gets part search suggestions.

### Type

#### [`DesPartSearchSuggestionValues`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-suggestion-values.md) object

Represents the results of a part search suggestion request.

```graphql
desPartSearchSuggestions(
  minCoverage: Float! = 0.01
  requestedAttributes: [String!]
  where: DesPartSearchSuggestionFilterInput!
): DesPartSearchSuggestionValues!
```

### Arguments

#### `minCoverage` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

The minimum part coverage required for returned attributes.

#### `requestedAttributes` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of attributes to request suggestions for.

#### `where` · [`DesPartSearchSuggestionFilterInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-suggestion-filter-input.md) non-null input

The filter to apply to the search suggestions.
