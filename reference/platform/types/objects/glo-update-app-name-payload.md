---
title: "GloUpdateAppNamePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-name-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUpdateAppNamePayload

### Returned By

[`gloUpdateAppName`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-name.md) mutation

```graphql
type GloUpdateAppNamePayload {
  errors: [GloUpdateAppNameError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloUpdateAppNameError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-name-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
