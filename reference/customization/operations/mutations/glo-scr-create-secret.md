---
title: "gloScrCreateSecret"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-create-secret"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# gloScrCreateSecret

Creates a workspace secret. There is no update: to change a value, delete the secret and add it again.

```graphql
gloScrCreateSecret(
  input: GloScrCreateSecretInput!
): GloScrCreateSecretPayload!
```

### Arguments

#### `gloScrCreateSecret.input` · [`GloScrCreateSecretInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-create-secret-input.md) non-null input customization

### Type

#### [`GloScrCreateSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-create-secret-payload.md) object customization
