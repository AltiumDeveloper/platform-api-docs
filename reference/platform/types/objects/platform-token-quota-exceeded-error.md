---
title: "PlatformTokenQuotaExceededError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-quota-exceeded-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenQuotaExceededError

Error that occurs when the maximum number of [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) for a workspace has been reached.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformWorkspaceRefreshTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error.md) union · [`PlatformWorkspaceTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error.md) union

```graphql
type PlatformTokenQuotaExceededError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
