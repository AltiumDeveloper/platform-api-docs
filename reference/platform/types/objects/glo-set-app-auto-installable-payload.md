---
title: "GloSetAppAutoInstallablePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-set-app-auto-installable-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloSetAppAutoInstallablePayload

### Returned By

[`gloSetAppAutoInstallable`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-set-app-auto-installable.md) mutation

```graphql
type GloSetAppAutoInstallablePayload {
  errors: [GloSetAppAutoInstallableError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloSetAppAutoInstallableError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-set-app-auto-installable-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
