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

```graphql
supSolutionTemplateApplications(
  limit: Int! = 10
  q: String
  start: Int! = 0
): [SupSolutionTemplateApplication]!
```

### Arguments

#### `supSolutionTemplateApplications.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Page size of results.

#### `supSolutionTemplateApplications.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The search query string. Leave empty to query all.

#### `supSolutionTemplateApplications.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Offset in the result set.

### Type

#### [`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) object supply
