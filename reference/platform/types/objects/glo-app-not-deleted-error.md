---
title: "GloAppNotDeletedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-deleted-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppNotDeletedError

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be deleted.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloDeleteAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-delete-app-error.md) union · [`GloRestoreAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-restore-app-error.md) union

```graphql
type GloAppNotDeletedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
