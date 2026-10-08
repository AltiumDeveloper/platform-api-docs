---
title: "GloAppClientSecretNotRemovedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-secret-not-removed-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppClientSecretNotRemovedError

Error that occurs when the \*OAuth client\* secret was not removed as expected from a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloRemoveAppClientSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-client-secret-error.md) union

```graphql
type GloAppClientSecretNotRemovedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
