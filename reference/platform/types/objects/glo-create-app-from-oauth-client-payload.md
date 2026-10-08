---
title: "GloCreateAppFromOAuthClientPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-from-oauth-client-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloCreateAppFromOAuthClientPayload

### Returned By

[`gloCreateAppFromOAuthClient`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-app-from-oauth-client.md) mutation

```graphql
type GloCreateAppFromOAuthClientPayload {
  errors: [GloCreateAppFromOAuthClientError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloCreateAppFromOAuthClientError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
