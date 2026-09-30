---
title: "GloAppInvalidOAuthError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-oauth-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppInvalidOAuthError

Error that occurs when an \*OAuth client\* is invalid.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloCreateAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) union

```graphql
type GloAppInvalidOAuthError implements Error {
  message: String!
}
```

### Fields

#### `GloAppInvalidOAuthError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
