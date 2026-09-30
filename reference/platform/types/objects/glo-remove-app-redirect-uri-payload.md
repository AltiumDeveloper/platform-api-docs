---
title: "GloRemoveAppRedirectUriPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-redirect-uri-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRemoveAppRedirectUriPayload

### Returned By

[`gloRemoveAppRedirectUri`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-redirect-uri.md) mutation

```graphql
type GloRemoveAppRedirectUriPayload {
  errors: [GloRemoveAppRedirectUriError!]
  gloApp: GloApp
}
```

### Fields

#### `GloRemoveAppRedirectUriPayload.errors` · [`[GloRemoveAppRedirectUriError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-redirect-uri-error.md) list union platform

#### `GloRemoveAppRedirectUriPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
