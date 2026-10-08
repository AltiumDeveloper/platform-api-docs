---
title: "GloAppRedirectUriNotUpdatedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-redirect-uri-not-updated-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppRedirectUriNotUpdatedError

Error that occurs when updating the redirect URI for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloAddAppRedirectUriError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-redirect-uri-error.md) union · [`GloRemoveAppRedirectUriError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-redirect-uri-error.md) union

```graphql
type GloAppRedirectUriNotUpdatedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
