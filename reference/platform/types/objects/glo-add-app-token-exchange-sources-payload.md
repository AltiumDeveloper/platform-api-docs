---
title: "GloAddAppTokenExchangeSourcesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-token-exchange-sources-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAddAppTokenExchangeSourcesPayload

### Returned By

[`gloAddAppTokenExchangeSources`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-token-exchange-sources.md) mutation

```graphql
type GloAddAppTokenExchangeSourcesPayload {
  errors: [GloAddAppTokenExchangeSourcesError!]
  gloApp: GloApp
}
```

### Fields

#### `errors` · [`[GloAddAppTokenExchangeSourcesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-token-exchange-sources-error.md) list union

#### `gloApp` · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object
