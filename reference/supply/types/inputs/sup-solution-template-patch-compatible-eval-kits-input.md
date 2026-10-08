---
title: "SupSolutionTemplatePatchCompatibleEvalKitsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-compatible-eval-kits-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchCompatibleEvalKitsInput

Input for adding or removing individual compatible eval kits on a solution template.

### Member Of

[`supSolutionTemplatePatchCompatibleEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-compatible-eval-kits.md) mutation

```graphql
input SupSolutionTemplatePatchCompatibleEvalKitsInput {
  addCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
  removeCompatibleEvalKitIds: [String!]
  solutionTemplateId: ID!
  updateCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitUpdateInput!]
}
```

### Fields

#### `addCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input

Compatible eval kits to add, each with its own optional parameters.

#### `removeCompatibleEvalKitIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The identifier(s) of the compatible eval kits to remove.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `updateCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitUpdateInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-update-input.md) list input

Compatible eval kits to update, targeted by their identifier.
