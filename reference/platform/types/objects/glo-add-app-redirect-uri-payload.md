---
title: "GloAddAppRedirectUriPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-redirect-uri-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAddAppRedirectUriPayload

### Returned By

[`gloAddAppRedirectUri`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-redirect-uri.md) mutation

```graphql
type GloAddAppRedirectUriPayload {
  errors: [GloAddAppRedirectUriError!]
  gloApp: GloApp
}
```

### Fields

#### `GloAddAppRedirectUriPayload.errors` · [`[GloAddAppRedirectUriError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-redirect-uri-error.md) list union platform

#### `GloAddAppRedirectUriPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
