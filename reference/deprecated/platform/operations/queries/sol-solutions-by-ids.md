---
title: "solSolutionsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/sol-solutions-by-ids"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: true
---

# solSolutionsByIds

> **Deprecated:** Internal resolver used by the Fusion gateway for batched entity resolution. Not intended for direct client use.

Gets solutions by IDs.

```graphql
solSolutionsByIds(
  ids: [ID!]!
): [SolSolution]! @deprecated
```

### Arguments

#### `solSolutionsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object platform
