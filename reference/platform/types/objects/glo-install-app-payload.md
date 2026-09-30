---
title: "GloInstallAppPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-install-app-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloInstallAppPayload

### Returned By

[`gloInstallApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-install-app.md) mutation

```graphql
type GloInstallAppPayload {
  errors: [GloInstallAppError!]
  gloApp: GloApp
}
```

### Fields

#### `GloInstallAppPayload.errors` · [`[GloInstallAppError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-install-app-error.md) list union platform

#### `GloInstallAppPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
