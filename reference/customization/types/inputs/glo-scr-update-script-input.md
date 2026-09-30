---
title: "GloScrUpdateScriptInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-update-script-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrUpdateScriptInput

### Member Of

[`gloScrUpdateScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-update-script.md) mutation

```graphql
input GloScrUpdateScriptInput {
  comment: String
  package: GloScrScriptPackageInput!
  scriptId: String!
}
```

### Fields

#### `GloScrUpdateScriptInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloScrUpdateScriptInput.package` · [`GloScrScriptPackageInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-package-input.md) non-null input customization

#### `GloScrUpdateScriptInput.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
