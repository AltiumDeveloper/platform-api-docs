---
title: "GloAppTokenExchangeSourcesDeletedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-token-exchange-sources-deleted-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppTokenExchangeSourcesDeletedError

Error that occurs when deleted `GloApp`s are given as token exchange sources. Lists every deleted App found in the request.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloAddAppTokenExchangeSourcesError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-token-exchange-sources-error.md) union

```graphql
type GloAppTokenExchangeSourcesDeletedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
