---
title: "SupSolutionTemplatePatchParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-parameters-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchParametersInput

Input for adding or removing individual parameters on a solution template.

### Member Of

[`supSolutionTemplatePatchParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-parameters.md) mutation

```graphql
input SupSolutionTemplatePatchParametersInput {
  addParameters: [SupSolutionTemplateParameterBundleInput!]
  removeParameterTitles: [String!]
  solutionTemplateId: ID!
  updateParameters: [SupSolutionTemplateParameterBundleInput!]
}
```

### Fields

#### `SupSolutionTemplatePatchParametersInput.addParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input supply

Parameters to add. Fails if a title already exists on this solution template.

#### `SupSolutionTemplatePatchParametersInput.removeParameterTitles` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Parameter titles to remove.

#### `SupSolutionTemplatePatchParametersInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the solution template.

#### `SupSolutionTemplatePatchParametersInput.updateParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input supply

Parameters to update. Fails if a title does not already exist on this solution template.
