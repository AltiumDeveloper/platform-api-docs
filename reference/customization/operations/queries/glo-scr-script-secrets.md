---
title: "gloScrScriptSecrets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-secrets"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloScrScriptSecrets

Retrieves the secrets a script revision declares. Omit the revision to read the latest one, the same revision a script execution uses by default. Values are never returned.

```graphql
gloScrScriptSecrets(
  scriptId: String!
  scriptVersionId: String
): [GloScrScriptSecret!]!
```

### Arguments

#### `gloScrScriptSecrets.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `gloScrScriptSecrets.scriptVersionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

### Type

#### [`GloScrScriptSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-secret.md) object customization
