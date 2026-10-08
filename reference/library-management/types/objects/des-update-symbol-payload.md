---
title: "DesUpdateSymbolPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-symbol-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateSymbolPayload

Payload of updating a symbol.

### Returned By

[`desUpdateSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-symbol.md) mutation

```graphql
type DesUpdateSymbolPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the updated symbol.
