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

#### `SupSolutionTemplatePatchCompatibleEvalKitsInput.addCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input supply

Compatible eval kits to add, each with its own optional parameters.

#### `SupSolutionTemplatePatchCompatibleEvalKitsInput.removeCompatibleEvalKitIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The identifier(s) of the compatible eval kits to remove.

#### `SupSolutionTemplatePatchCompatibleEvalKitsInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the solution template.

#### `SupSolutionTemplatePatchCompatibleEvalKitsInput.updateCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitUpdateInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-update-input.md) list input supply

Compatible eval kits to update, targeted by their identifier.
