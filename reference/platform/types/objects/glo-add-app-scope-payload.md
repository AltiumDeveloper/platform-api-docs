---
title: "GloAddAppScopePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-scope-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAddAppScopePayload

### Returned By

[`gloAddAppScope`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-scope.md) mutation

```graphql
type GloAddAppScopePayload {
  errors: [GloAddAppScopeError!]
  gloApp: GloApp
}
```

### Fields

#### `GloAddAppScopePayload.errors` · [`[GloAddAppScopeError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-scope-error.md) list union platform

#### `GloAddAppScopePayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
