---
title: "GloRemoveAppTokenExchangeSourcePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-token-exchange-source-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloRemoveAppTokenExchangeSourcePayload

### Returned By

[`gloRemoveAppTokenExchangeSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-token-exchange-source.md) mutation

```graphql
type GloRemoveAppTokenExchangeSourcePayload {
  errors: [GloRemoveAppTokenExchangeSourceError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloRemoveAppTokenExchangeSourceError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-token-exchange-source-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
