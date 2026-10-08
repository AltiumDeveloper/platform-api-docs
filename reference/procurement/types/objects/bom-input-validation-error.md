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

#### [`BomError`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) interface

A common interface for all errors that might occur in mutations.

```graphql
type BomInputValidationError implements BomError {
  message: String!
  path: String
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Error message.

#### `path` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The path in the input where the validation failed.
