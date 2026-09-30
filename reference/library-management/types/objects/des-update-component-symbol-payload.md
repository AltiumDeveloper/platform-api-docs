---
title: "DesUpdateComponentSymbolPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-symbol-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateComponentSymbolPayload

Payload associated with updating the symbol of a component.

### Returned By

[`desUpdateComponentSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-symbol.md) mutation

```graphql
type DesUpdateComponentSymbolPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateComponentSymbolPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
