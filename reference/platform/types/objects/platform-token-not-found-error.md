---
title: "PlatformTokenNotFoundError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenNotFoundError

Error that occurs when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) with the specified identifier could not be found.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformTokenDeleteError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-delete-error.md) union · [`PlatformWorkspaceRefreshTokenCreateNewSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-new-secret-error.md) union · [`PlatformWorkspaceRefreshTokenDeleteSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-delete-secret-error.md) union

```graphql
type PlatformTokenNotFoundError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
