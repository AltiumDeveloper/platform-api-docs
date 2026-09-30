---
title: "SupSolutionTemplateCreateSolutionTemplateApplicationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-application-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplateApplicationInput

### Member Of

[`supSolutionTemplateCreateSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-create-solution-template-application.md) mutation

```graphql
input SupSolutionTemplateCreateSolutionTemplateApplicationInput {
  applicationId: String!
  description: String
  parameters: [SupSolutionTemplateApplicationCreateParameterBundleInput!]!
}
```

### Fields

#### `SupSolutionTemplateCreateSolutionTemplateApplicationInput.applicationId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template application identifier.

#### `SupSolutionTemplateCreateSolutionTemplateApplicationInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template application description.

#### `SupSolutionTemplateCreateSolutionTemplateApplicationInput.parameters` · [`[SupSolutionTemplateApplicationCreateParameterBundleInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) non-null input supply

The list of application parameters associated with the solution template application.
