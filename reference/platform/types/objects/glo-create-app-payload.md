---
title: "GloCreateAppPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloCreateAppPayload

### Returned By

[`gloCreateApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-app.md) mutation

```graphql
type GloCreateAppPayload {
  errors: [GloCreateAppError!]
  gloApp: GloApp
  warnings: [GloCreateAppWarning!]
}
```

### Fields

#### `errors` · [`[GloCreateAppError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object

#### `warnings` · [`[GloCreateAppWarning!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-warning.md) list object
