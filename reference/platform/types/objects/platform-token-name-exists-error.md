---
title: "PlatformTokenNameExistsError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-name-exists-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenNameExistsError

Error that occurs when the input [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) name already exists.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`PlatformTokenUpdateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-update-error.md) union · [`PlatformWorkspaceRefreshTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error.md) union · [`PlatformWorkspaceTokenCreateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error.md) union

```graphql
type PlatformTokenNameExistsError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
