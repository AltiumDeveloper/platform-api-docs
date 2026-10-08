---
title: "GloAppScopeNotUpdatedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-scope-not-updated-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppScopeNotUpdatedError

Error that occurs when updating the scope for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloAddAppScopeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-scope-error.md) union · [`GloRemoveAppScopeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-scope-error.md) union

```graphql
type GloAppScopeNotUpdatedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
