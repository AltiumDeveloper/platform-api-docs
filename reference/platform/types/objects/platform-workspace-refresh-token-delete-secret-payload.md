---
title: "PlatformWorkspaceRefreshTokenDeleteSecretPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-delete-secret-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenDeleteSecretPayload

### Returned By

[`platformWorkspaceRefreshTokenDeleteSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-delete-secret.md) mutation

```graphql
type PlatformWorkspaceRefreshTokenDeleteSecretPayload {
  errors: [PlatformWorkspaceRefreshTokenDeleteSecretError!]
  refreshToken: PlatformWorkspaceRefreshToken
}
```

### Fields

#### `PlatformWorkspaceRefreshTokenDeleteSecretPayload.errors` · [`[PlatformWorkspaceRefreshTokenDeleteSecretError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-delete-secret-error.md) list union platform

#### `PlatformWorkspaceRefreshTokenDeleteSecretPayload.refreshToken` · [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) object platform
