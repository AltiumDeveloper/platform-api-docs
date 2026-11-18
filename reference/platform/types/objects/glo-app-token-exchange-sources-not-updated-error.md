---
title: "GloAppTokenExchangeSourcesNotUpdatedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-token-exchange-sources-not-updated-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppTokenExchangeSourcesNotUpdatedError

Error that occurs when updating the token exchange sources for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloAddAppTokenExchangeSourcesError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-token-exchange-sources-error.md) union · [`GloRemoveAppTokenExchangeSourceError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-token-exchange-source-error.md) union

```graphql
type GloAppTokenExchangeSourcesNotUpdatedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
