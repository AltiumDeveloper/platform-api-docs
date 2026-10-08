---
title: "GloScrSetScriptSecretsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-set-script-secrets-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrSetScriptSecretsInput

### Member Of

[`gloScrSetScriptSecrets`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-set-script-secrets.md) mutation

```graphql
input GloScrSetScriptSecretsInput {
  scriptId: String!
  scriptVersionId: String!
  secretNames: [String!]!
}
```

### Fields

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `scriptVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `secretNames` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
