---
title: "PlatformWorkspaceRefreshTokenCreateNewSecretPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-new-secret-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateNewSecretPayload

Payload for creating a new client secret for a `PlatformWorkspaceRefreshToken`.

### Returned By

[`platformWorkspaceRefreshTokenCreateNewSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create-new-secret.md) mutation

```graphql
type PlatformWorkspaceRefreshTokenCreateNewSecretPayload {
  clientSecret: String
  errors: [PlatformWorkspaceRefreshTokenCreateNewSecretError!]
  refreshToken: PlatformWorkspaceRefreshToken
}
```

### Fields

#### `PlatformWorkspaceRefreshTokenCreateNewSecretPayload.clientSecret` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The newly generated client secret.

#### `PlatformWorkspaceRefreshTokenCreateNewSecretPayload.errors` · [`[PlatformWorkspaceRefreshTokenCreateNewSecretError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-new-secret-error.md) list union platform

#### `PlatformWorkspaceRefreshTokenCreateNewSecretPayload.refreshToken` · [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) object platform

The `PlatformWorkspaceRefreshToken` for which the new secret was created.
