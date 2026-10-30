---
title: "PlatformTokenInvalidNameError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-invalid-name-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenInvalidNameError

Error returned by the Token API when an input name for a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) is invalid.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformTokenUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-update-error.md) union · [`PlatformWorkspaceRefreshTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error.md) union · [`PlatformWorkspaceTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error.md) union

```graphql
type PlatformTokenInvalidNameError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
