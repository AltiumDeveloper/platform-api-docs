---
title: "SupSolutionTemplateUpdateSolutionTemplateApplicationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-application-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateSolutionTemplateApplicationInput

### Member Of

[`supSolutionTemplateUpdateSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-update-solution-template-application.md) mutation

```graphql
input SupSolutionTemplateUpdateSolutionTemplateApplicationInput {
  addParameters: [SupSolutionTemplateApplicationCreateParameterBundleInput!]
  description: String
  id: ID!
  removeParameters: [SupSolutionTemplateApplicationRemoveParameterBundleInput!]
  updateParameters: [SupSolutionTemplateApplicationUpdateParameterBundleInput!]
}
```

### Fields

#### `SupSolutionTemplateUpdateSolutionTemplateApplicationInput.addParameters` · [`[SupSolutionTemplateApplicationCreateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) list input supply

The add list of application parameters associated with the solution template application.

#### `SupSolutionTemplateUpdateSolutionTemplateApplicationInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template application description.

#### `SupSolutionTemplateUpdateSolutionTemplateApplicationInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template application GRID identifier.

#### `SupSolutionTemplateUpdateSolutionTemplateApplicationInput.removeParameters` · [`[SupSolutionTemplateApplicationRemoveParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-remove-parameter-bundle-input.md) list input supply

The remove list of application parameters associated with the solution template application.

#### `SupSolutionTemplateUpdateSolutionTemplateApplicationInput.updateParameters` · [`[SupSolutionTemplateApplicationUpdateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-update-parameter-bundle-input.md) list input supply

The update list of application parameters associated with the solution template application.
