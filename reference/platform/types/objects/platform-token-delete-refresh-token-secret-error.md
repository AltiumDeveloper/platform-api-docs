---
title: "PlatformTokenDeleteRefreshTokenSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-refresh-token-secret-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenDeleteRefreshTokenSecretError

Error returned by the Token API when a client secret for a [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) could not be deleted.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformWorkspaceRefreshTokenDeleteSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-delete-secret-error.md) union

```graphql
type PlatformTokenDeleteRefreshTokenSecretError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
