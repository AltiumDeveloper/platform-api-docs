---
title: "GloAppAutoInstallableForbiddenError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-auto-installable-forbidden-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppAutoInstallableForbiddenError

Error that occurs when the user is not permitted to mark an App as auto-installable.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloCreateAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error.md) union

```graphql
type GloAppAutoInstallableForbiddenError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
