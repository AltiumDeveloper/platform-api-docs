---
title: "PlatformTokenUpdateInvalidError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-invalid-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenUpdateInvalidError

Error that occurs when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) update request specifies no fields to update.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformTokenUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-update-error.md) union

```graphql
type PlatformTokenUpdateInvalidError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
