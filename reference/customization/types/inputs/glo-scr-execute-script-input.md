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

#### `GloScrExecuteScriptInput.parameters` · [`[GloScrScriptParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-parameter-input.md) list input customization

#### `GloScrExecuteScriptInput.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloScrExecuteScriptInput.scriptVersionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
