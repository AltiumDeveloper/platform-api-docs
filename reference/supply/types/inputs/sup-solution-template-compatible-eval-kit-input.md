---
title: "SupSolutionTemplateCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCompatibleEvalKitInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-input.md) input · [`SupSolutionTemplatePatchCompatibleEvalKitsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-compatible-eval-kits-input.md) input · [`SupSolutionTemplateSetCompatibleEvalKitsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-compatible-eval-kits-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input.md) input

```graphql
input SupSolutionTemplateCompatibleEvalKitInput {
  evalKitId: ID!
  parameters: [SupSolutionTemplateParameterBundleInput!]
}
```

### Fields

#### `SupSolutionTemplateCompatibleEvalKitInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier. Can be duplicated.

#### `SupSolutionTemplateCompatibleEvalKitInput.parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input supply

The list of parameters associated with the compatible evaluation kit.
