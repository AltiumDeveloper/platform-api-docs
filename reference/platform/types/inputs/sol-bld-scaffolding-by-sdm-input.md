---
title: "SolBldScaffoldingBySdmInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-scaffolding-by-sdm-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldScaffoldingBySdmInput

### Member Of

[`solBldScaffoldingBySdm`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-scaffolding-by-sdm.md) mutation

```graphql
input SolBldScaffoldingBySdmInput {
  ignoreExistingSources: Boolean
  sdmReferenceDesignator: String!
  solutionId: ID!
}
```

### Fields

#### `SolBldScaffoldingBySdmInput.ignoreExistingSources` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether to ignore existing sources when scaffolding. If true, the BSP is created from scratch. If false, changes are applied into existing software project. By default it's false.

#### `SolBldScaffoldingBySdmInput.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SolBldScaffoldingBySdmInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
