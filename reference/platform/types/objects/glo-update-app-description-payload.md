---
title: "GloUpdateAppDescriptionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-description-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUpdateAppDescriptionPayload

### Returned By

[`gloUpdateAppDescription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-description.md) mutation

```graphql
type GloUpdateAppDescriptionPayload {
  errors: [GloUpdateAppDescriptionError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloUpdateAppDescriptionError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-description-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
