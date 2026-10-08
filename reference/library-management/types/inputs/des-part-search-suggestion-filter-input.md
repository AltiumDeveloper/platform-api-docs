---
title: "DesPartSearchSuggestionFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-suggestion-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchSuggestionFilterInput

Filter for part search suggestions.

### Member Of

[`desPartSearchSuggestions`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-suggestions.md) query

```graphql
input DesPartSearchSuggestionFilterInput {
  categories: [String!]
  manufacturers: [String!]
}
```

### Fields

#### `categories` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of categories to filter by.

#### `manufacturers` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of manufacturers to filter by.
