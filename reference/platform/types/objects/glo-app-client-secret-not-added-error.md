---
title: "GloAppClientSecretNotAddedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-secret-not-added-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppClientSecretNotAddedError

Error that occurs when attempting to add a client secret to a `GloApp` \*OAuth client\* but the secret could not be added.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloAddAppClientSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-client-secret-error.md) union

```graphql
type GloAppClientSecretNotAddedError implements Error {
  message: String!
}
```

### Fields

#### `GloAppClientSecretNotAddedError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
