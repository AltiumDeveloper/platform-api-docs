---
title: "GloAddAppGrantTypePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-grant-type-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAddAppGrantTypePayload

### Returned By

[`gloAddAppGrantType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-grant-type.md) mutation

```graphql
type GloAddAppGrantTypePayload {
  errors: [GloAddAppGrantTypeError!]
  gloApp: GloApp
}
```

### Fields

#### `GloAddAppGrantTypePayload.errors` · [`[GloAddAppGrantTypeError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-grant-type-error.md) list union platform

#### `GloAddAppGrantTypePayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
