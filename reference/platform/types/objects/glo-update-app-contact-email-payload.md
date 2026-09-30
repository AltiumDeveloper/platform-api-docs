---
title: "GloUpdateAppContactEmailPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-contact-email-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUpdateAppContactEmailPayload

### Returned By

[`gloUpdateAppContactEmail`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-contact-email.md) mutation

```graphql
type GloUpdateAppContactEmailPayload {
  errors: [GloUpdateAppContactEmailError!]
  gloApp: GloApp
}
```

### Fields

#### `GloUpdateAppContactEmailPayload.errors` · [`[GloUpdateAppContactEmailError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-contact-email-error.md) list union platform

#### `GloUpdateAppContactEmailPayload.gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform
