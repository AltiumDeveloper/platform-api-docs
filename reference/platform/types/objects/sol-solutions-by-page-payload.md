---
title: "SolSolutionsByPagePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solutions-by-page-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolSolutionsByPagePayload

### Returned By

[`solSolutionsByPagev2`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solutions-by-pagev-2.md) query

```graphql
type SolSolutionsByPagePayload {
  solutions: [SolSolution!]!
  totalCount: Int!
}
```

### Fields

#### `solutions` · [`[SolSolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) non-null object

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar
