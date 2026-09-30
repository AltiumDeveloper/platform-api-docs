---
title: "DesCreateSymbolPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-create-symbol-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateSymbolPayload

Payload associated with creating a symbol.

### Returned By

[`desCreateSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-symbol.md) mutation

```graphql
type DesCreateSymbolPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `DesCreateSymbolPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesCreateSymbolPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the created symbol.
