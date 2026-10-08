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

#### `applicationId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template application identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution template application description.

#### `parameters` · [`[SupSolutionTemplateApplicationCreateParameterBundleInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) non-null input

The list of application parameters associated with the solution template application.
