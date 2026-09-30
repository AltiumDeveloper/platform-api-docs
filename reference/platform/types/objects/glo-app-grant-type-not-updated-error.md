---
title: "GloAppGrantTypeNotUpdatedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-grant-type-not-updated-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppGrantTypeNotUpdatedError

Error that occurs when updating the grant type for a `GloApp` is unsuccessful.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloAddAppGrantTypeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-grant-type-error.md) union · [`GloRemoveAppGrantTypeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-grant-type-error.md) union

```graphql
type GloAppGrantTypeNotUpdatedError implements Error {
  message: String!
}
```

### Fields

#### `GloAppGrantTypeNotUpdatedError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
