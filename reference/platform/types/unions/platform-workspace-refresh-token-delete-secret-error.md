---
title: "PlatformWorkspaceRefreshTokenDeleteSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-delete-secret-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenDeleteSecretError

### Member Of

[`PlatformWorkspaceRefreshTokenDeleteSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-delete-secret-payload.md) object

```graphql
union PlatformWorkspaceRefreshTokenDeleteSecretError = PlatformTokenNotFoundError | PlatformTokenDeleteRefreshTokenSecretError
```

### Possible types

#### [`PlatformWorkspaceRefreshTokenDeleteSecretError.PlatformTokenNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error.md) object platform

Error that occurs when a `PlatformToken` with the specified identifier could not be found.

#### [`PlatformWorkspaceRefreshTokenDeleteSecretError.PlatformTokenDeleteRefreshTokenSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-refresh-token-secret-error.md) object platform

Error returned by the Token API when a client secret for a `PlatformWorkspaceRefreshToken` could not be deleted.
