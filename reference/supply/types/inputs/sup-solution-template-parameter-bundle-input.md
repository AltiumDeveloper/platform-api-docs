---
title: "SupSolutionTemplateParameterBundleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterBundleInput

### Member Of

[`SupSolutionTemplateCompatibleEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) input · [`SupSolutionTemplateCompatibleEvalKitUpdateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-update-input.md) input · [`SupSolutionTemplateCreateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-input.md) input · [`SupSolutionTemplatePatchParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-parameters-input.md) input · [`SupSolutionTemplateSetParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-parameters-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input.md) input

```graphql
input SupSolutionTemplateParameterBundleInput {
  parameter: SupSolutionTemplateParameterInput!
  values: [SupSolutionTemplateParameterValueInput!]!
}
```

### Fields

#### `SupSolutionTemplateParameterBundleInput.parameter` · [`SupSolutionTemplateParameterInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-input.md) non-null input supply

The parameter to be bundled.

#### `SupSolutionTemplateParameterBundleInput.values` · [`[SupSolutionTemplateParameterValueInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-value-input.md) non-null input supply

The list of parameter values associated with the parameter bundle.
