---
title: "GloAppMissingOAuthClientError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppMissingOAuthClientError

Error that occurs when an \*OAuth client\* is missing.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloAddAppClientSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-client-secret-error.md) union · [`GloCreateAppFromOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) union · [`GloRestoreAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-restore-app-error.md) union

```graphql
type GloAppMissingOAuthClientError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
