---
title: "GloRemoveAppClientSecretPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-client-secret-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRemoveAppClientSecretPayload

### Returned By

[`gloRemoveAppClientSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-client-secret.md) mutation

```graphql
type GloRemoveAppClientSecretPayload {
  errors: [GloRemoveAppClientSecretError!]
  gloApp: GloApp
}
```

### Fields

#### `GloRemoveAppClientSecretPayload.errors` · [`[GloRemoveAppClientSecretError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-client-secret-error.md) list union platform

#### `GloRemoveAppClientSecretPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
