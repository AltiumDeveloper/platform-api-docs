---
title: "BomInputValidationError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-input-validation-error"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomInputValidationError

Describes a problem with the provided input (validation error).

### Interfaces

#### [`BomError`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) interface procurement

A common interface for all errors that might occur in mutations.

```graphql
type BomInputValidationError implements BomError {
  message: String!
  path: String
}
```

### Fields

#### `BomInputValidationError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Error message.

#### `BomInputValidationError.path` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The path in the input where the validation failed.
