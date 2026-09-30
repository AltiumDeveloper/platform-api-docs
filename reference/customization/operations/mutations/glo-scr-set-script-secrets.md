---
title: "gloScrSetScriptSecrets"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-set-script-secrets"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# gloScrSetScriptSecrets

Replaces the set of secrets a script revision declares. An empty list removes them all.

```graphql
gloScrSetScriptSecrets(
  input: GloScrSetScriptSecretsInput!
): GloScrSetScriptSecretsPayload!
```

### Arguments

#### `gloScrSetScriptSecrets.input` · [`GloScrSetScriptSecretsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-set-script-secrets-input.md) non-null input customization

### Type

#### [`GloScrSetScriptSecretsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-set-script-secrets-payload.md) object customization
