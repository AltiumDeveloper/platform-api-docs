---
title: "GloScrRenameScriptInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-rename-script-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrRenameScriptInput

### Member Of

[`gloScrRenameScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-rename-script.md) mutation

```graphql
input GloScrRenameScriptInput {
  name: String!
  onlyIfProvisional: Boolean
  scriptId: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `onlyIfProvisional` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
