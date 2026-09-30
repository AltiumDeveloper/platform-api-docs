---
title: "SupSolutionTemplateSetParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-parameters-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetParametersInput

Input for replacing all parameters on a solution template.

### Member Of

[`supSolutionTemplateSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-parameters.md) mutation

```graphql
input SupSolutionTemplateSetParametersInput {
  parameters: [SupSolutionTemplateParameterBundleInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSolutionTemplateSetParametersInput.parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input supply

The new set of parameters. Replaces all existing top-level parameters.

#### `SupSolutionTemplateSetParametersInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the solution template.
