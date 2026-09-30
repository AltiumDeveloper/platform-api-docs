---
title: "GloScrScriptPackageInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-package-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrScriptPackageInput

Input for defining a script package, including the file token required for retrieval.

### Member Of

[`GloScrCreateScriptInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-create-script-input.md) input · [`GloScrUpdateScriptInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-update-script-input.md) input

```graphql
input GloScrScriptPackageInput {
  fileToken: String!
}
```

### Fields

#### `GloScrScriptPackageInput.fileToken` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The token used to access the script package file.
