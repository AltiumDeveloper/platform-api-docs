---
title: "GloRemoveAppScopePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-scope-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRemoveAppScopePayload

### Returned By

[`gloRemoveAppScope`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-scope.md) mutation

```graphql
type GloRemoveAppScopePayload {
  errors: [GloRemoveAppScopeError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloRemoveAppScopeError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-scope-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
