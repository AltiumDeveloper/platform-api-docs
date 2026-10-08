---
title: "GloRemoveAppGrantTypePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-grant-type-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRemoveAppGrantTypePayload

### Returned By

[`gloRemoveAppGrantType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-grant-type.md) mutation

```graphql
type GloRemoveAppGrantTypePayload {
  errors: [GloRemoveAppGrantTypeError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloRemoveAppGrantTypeError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-grant-type-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
