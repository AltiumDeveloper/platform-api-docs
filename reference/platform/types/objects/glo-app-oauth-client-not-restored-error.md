---
title: "GloAppOAuthClientNotRestoredError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-not-restored-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppOAuthClientNotRestoredError

Error that occurs when an \*OAuth client\* cannot be restored.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloRestoreAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-restore-app-error.md) union

```graphql
type GloAppOAuthClientNotRestoredError implements Error {
  message: String!
}
```

### Fields

#### `GloAppOAuthClientNotRestoredError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
