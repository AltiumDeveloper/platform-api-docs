---
title: "SolBldCreateSolutionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-create-solution-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldCreateSolutionInput

### Member Of

[`solBldCreateSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-create-solution.md) mutation

```graphql
input SolBldCreateSolutionInput {
  includeEmptyEsd: Boolean!
  solutionItems: [ID!]!
}
```

### Fields

#### `SolBldCreateSolutionInput.includeEmptyEsd` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SolBldCreateSolutionInput.solutionItems` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
