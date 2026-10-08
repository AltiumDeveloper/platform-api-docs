---
title: "GloAppHridExistsError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppHridExistsError

Error that occurs when the input hrid already exists.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloCreateAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) union · [`GloCreateAppFromOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) union · [`GloUpdateAppHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-hrid-error.md) union

```graphql
type GloAppHridExistsError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
