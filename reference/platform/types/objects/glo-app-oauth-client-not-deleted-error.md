---
title: "GloAppOAuthClientNotDeletedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-not-deleted-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppOAuthClientNotDeletedError

Error that occurs when an \*OAuth client\* cannot be deleted.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloDeleteAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-delete-app-error.md) union

```graphql
type GloAppOAuthClientNotDeletedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
