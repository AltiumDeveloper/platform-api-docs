---
title: "GloAppOAuthClientGrantAccessError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-grant-access-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppOAuthClientGrantAccessError

Error that occurs when granting access to a \*OAuth client\* fails.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloCreateAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) union · [`GloCreateAppFromOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) union

```graphql
type GloAppOAuthClientGrantAccessError implements Error {
  message: String!
}
```

### Fields

#### `GloAppOAuthClientGrantAccessError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
