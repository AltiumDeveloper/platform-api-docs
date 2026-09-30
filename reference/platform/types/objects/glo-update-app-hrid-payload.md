---
title: "GloUpdateAppHridPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-hrid-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUpdateAppHridPayload

### Returned By

[`gloUpdateAppHrid`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-hrid.md) mutation

```graphql
type GloUpdateAppHridPayload {
  errors: [GloUpdateAppHridError!]
  gloApp: GloApp
}
```

### Fields

#### `GloUpdateAppHridPayload.errors` · [`[GloUpdateAppHridError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-hrid-error.md) list union platform

#### `GloUpdateAppHridPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
