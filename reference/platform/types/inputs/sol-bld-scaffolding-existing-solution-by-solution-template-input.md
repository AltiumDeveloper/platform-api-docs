---
title: "SolBldScaffoldingExistingSolutionBySolutionTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-scaffolding-existing-solution-by-solution-template-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldScaffoldingExistingSolutionBySolutionTemplateInput

### Member Of

[`solBldScaffoldingExistingSolutionBySolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-scaffolding-existing-solution-by-solution-template.md) mutation

```graphql
input SolBldScaffoldingExistingSolutionBySolutionTemplateInput {
  evalKitId: ID
  parameterBundle: String
  solutionId: ID!
  solutionTemplateId: ID!
}
```

### Fields

#### `SolBldScaffoldingExistingSolutionBySolutionTemplateInput.evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SolBldScaffoldingExistingSolutionBySolutionTemplateInput.parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolBldScaffoldingExistingSolutionBySolutionTemplateInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The existing solution that scaffolding should be applied to.

#### `SolBldScaffoldingExistingSolutionBySolutionTemplateInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
