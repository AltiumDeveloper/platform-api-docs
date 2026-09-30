---
title: "BomPayloadError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-payload-error"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomPayloadError

Describes an error occurred while executing a mutation.

### Interfaces

#### [`BomError`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) interface procurement

A common interface for all errors that might occur in mutations.

```graphql
type BomPayloadError implements BomError {
  message: String!
}
```

### Fields

#### `BomPayloadError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Error message.
