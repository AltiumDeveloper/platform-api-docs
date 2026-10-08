---
title: "GloScrExecuteScriptInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-execute-script-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrExecuteScriptInput

### Member Of

[`gloScrExecuteScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-execute-script.md) mutation

```graphql
input GloScrExecuteScriptInput {
  parameters: [GloScrScriptParameterInput!]
  scriptId: String!
  scriptVersionId: String
}
```

### Fields

#### `parameters` · [`[GloScrScriptParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-parameter-input.md) list input

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `scriptVersionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
