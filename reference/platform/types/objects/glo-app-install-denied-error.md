---
title: "GloAppInstallDeniedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-install-denied-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppInstallDeniedError

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be installed into a workspace due to insufficient permissions.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloInstallAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-install-app-error.md) union

```graphql
type GloAppInstallDeniedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
