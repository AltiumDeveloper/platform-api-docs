---
title: "SolBldLinkSolutionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-link-solution-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldLinkSolutionInput

### Member Of

[`solBldLinkSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-link-solution.md) mutation

```graphql
input SolBldLinkSolutionInput {
  ensureEsdExists: Boolean!
  solutionId: ID!
  solutionItems: [ID!]!
}
```

### Fields

#### `SolBldLinkSolutionInput.ensureEsdExists` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SolBldLinkSolutionInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolBldLinkSolutionInput.solutionItems` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
