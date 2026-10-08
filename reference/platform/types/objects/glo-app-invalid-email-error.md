---
title: "GloAppInvalidEmailError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-email-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppInvalidEmailError

Error that occurs when the input email is invalid.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloCreateAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) union · [`GloCreateAppFromOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) union · [`GloUpdateAppContactEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-contact-email-error.md) union

```graphql
type GloAppInvalidEmailError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
