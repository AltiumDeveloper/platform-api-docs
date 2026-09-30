---
title: "PlatformRefreshTokenCreateNewSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-refresh-token-create-new-secret-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformRefreshTokenCreateNewSecretError

Error returned by the Token API when a new client secret for a `PlatformWorkspaceRefreshToken` could not be created.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`PlatformWorkspaceRefreshTokenCreateNewSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-new-secret-error.md) union

```graphql
type PlatformRefreshTokenCreateNewSecretError implements Error {
  message: String!
}
```

### Fields

#### `PlatformRefreshTokenCreateNewSecretError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
