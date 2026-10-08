---
title: "GloUninstallAppPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-uninstall-app-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUninstallAppPayload

### Returned By

[`gloUninstallApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-uninstall-app.md) mutation

```graphql
type GloUninstallAppPayload {
  errors: [GloUninstallAppError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloUninstallAppError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-uninstall-app-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
