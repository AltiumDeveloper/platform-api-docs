---
title: "SupSolutionTemplateSetCompatibleEvalKitsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-compatible-eval-kits-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetCompatibleEvalKitsInput

Input for replacing all compatible eval kits on a solution template.

### Member Of

[`supSolutionTemplateSetCompatibleEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-compatible-eval-kits.md) mutation

```graphql
input SupSolutionTemplateSetCompatibleEvalKitsInput {
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSolutionTemplateSetCompatibleEvalKitsInput.compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input supply

The new set of compatible eval kits. Replaces all existing compatible eval kits.

#### `SupSolutionTemplateSetCompatibleEvalKitsInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the solution template.
