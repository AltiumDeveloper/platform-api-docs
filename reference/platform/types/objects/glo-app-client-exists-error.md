---
title: "GloAppClientExistsError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-exists-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppClientExistsError

Error that occurs when attempting to create a new `GloApp` with an \*OAuth client\* that is already associated with another `GloApp`.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloCreateAppFromOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error.md) union

```graphql
type GloAppClientExistsError implements Error {
  message: String!
}
```

### Fields

#### `GloAppClientExistsError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
