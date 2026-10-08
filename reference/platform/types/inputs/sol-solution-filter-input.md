---
title: "SolSolutionFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-solution-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolSolutionFilterInput

A filter input type for querying solutions. This class is used to specify filtering criteria when retrieving solutions.

### Member Of

[`solSolutionsByPagev2`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solutions-by-pagev-2.md) query

```graphql
input SolSolutionFilterInput {
  accessibleTo: SolAccessibleToInput
  name: String
  ownedBy: [ID!]
}
```

### Fields

#### `accessibleTo` · [`SolAccessibleToInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-accessible-to-input.md) input

Restricts results to solutions accessible through all specified targets.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A filter by solution name. The filter is applied as a "contains" search, so it will return all solutions whose names contain the specified string.

#### `ownedBy` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Restricts results to solutions owned by at least one of the specified users.
