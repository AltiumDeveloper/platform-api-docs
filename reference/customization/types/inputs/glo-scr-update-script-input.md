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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `package` · [`GloScrScriptPackageInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-package-input.md) non-null input

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
