---
title: "PlatformTokenWorkspaceAccessDeniedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-workspace-access-denied-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenWorkspaceAccessDeniedError

Error that occurs when access to a workspace is denied for a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md).

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformWorkspaceRefreshTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error.md) union · [`PlatformWorkspaceTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error.md) union

```graphql
type PlatformTokenWorkspaceAccessDeniedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
