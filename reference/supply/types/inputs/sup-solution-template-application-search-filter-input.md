---
title: "SupSolutionTemplateApplicationSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-search-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationSearchFilterInput

Represents the filter for searching solution template applications.

### Member Of

[`supSolutionTemplateApplicationsSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications-search.md) query

```graphql
input SupSolutionTemplateApplicationSearchFilterInput {
  ids: [ID!]
  q: String
}
```

### Fields

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by solution template application identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by text data.
