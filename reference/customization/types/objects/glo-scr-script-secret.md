---
title: "GloScrScriptSecret"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-secret"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptSecret

### Returned By

[`gloScrScriptSecrets`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-secrets.md) query

### Member Of

[`GloScrSetScriptSecretsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-set-script-secrets-payload.md) object

```graphql
type GloScrScriptSecret {
  isMissing: Boolean!
  name: String!
}
```

### Fields

#### `isMissing` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True when the secret this revision declares no longer exists in the workspace, so a run of it will fail.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
