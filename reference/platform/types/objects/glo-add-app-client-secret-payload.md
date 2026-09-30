---
title: "GloAddAppClientSecretPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-client-secret-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAddAppClientSecretPayload

### Returned By

[`gloAddAppClientSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-client-secret.md) mutation

```graphql
type GloAddAppClientSecretPayload {
  errors: [GloAddAppClientSecretError!]
  gloApp: GloApp
}
```

### Fields

#### `GloAddAppClientSecretPayload.errors` · [`[GloAddAppClientSecretError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-client-secret-error.md) list union platform

#### `GloAddAppClientSecretPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
