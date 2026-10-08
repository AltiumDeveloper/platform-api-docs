---
title: "PlatformTokenDeletePartiallyFailedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-partially-failed-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenDeletePartiallyFailedError

Error returned by the Token API when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) could not be fully deleted, leaving it in an inconsistent state.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformTokenDeleteError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-delete-error.md) union

```graphql
type PlatformTokenDeletePartiallyFailedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
