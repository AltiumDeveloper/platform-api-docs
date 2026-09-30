---
title: "SolLinkItemsToSolutionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-link-items-to-solution-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolLinkItemsToSolutionInput

### Member Of

[`solLinkItemsToSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-link-items-to-solution.md) mutation

```graphql
input SolLinkItemsToSolutionInput {
  itemIds: [ID!]!
  solutionId: ID!
}
```

### Fields

#### `SolLinkItemsToSolutionInput.itemIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolLinkItemsToSolutionInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
