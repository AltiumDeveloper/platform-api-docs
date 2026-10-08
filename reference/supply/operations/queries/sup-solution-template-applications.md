---
title: "supSolutionTemplateApplications"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateApplications

List a solution template applications.

### Type

#### [`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) object

```graphql
supSolutionTemplateApplications(
  limit: Int! = 10
  q: String
  start: Int! = 0
): [SupSolutionTemplateApplication]!
```

### Arguments

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.
