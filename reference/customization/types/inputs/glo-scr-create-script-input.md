---
title: "GloScrCreateScriptInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-create-script-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrCreateScriptInput

### Member Of

[`gloScrCreateScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-create-script.md) mutation

```graphql
input GloScrCreateScriptInput {
  description: String
  name: String!
  package: GloScrScriptPackageInput!
}
```

### Fields

#### `GloScrCreateScriptInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloScrCreateScriptInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloScrCreateScriptInput.package` · [`GloScrScriptPackageInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-package-input.md) non-null input customization
