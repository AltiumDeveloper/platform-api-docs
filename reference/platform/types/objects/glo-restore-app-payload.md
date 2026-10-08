---
title: "GloRestoreAppPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-restore-app-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRestoreAppPayload

### Returned By

[`gloRestoreApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-restore-app.md) mutation

```graphql
type GloRestoreAppPayload {
  errors: [GloRestoreAppError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloRestoreAppError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-restore-app-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
