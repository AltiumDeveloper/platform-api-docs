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

#### [`PlatformTokenNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error.md) object

Error that occurs when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) with the specified identifier could not be found.

#### [`PlatformTokenDeleteRefreshTokenSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-refresh-token-secret-error.md) object

Error returned by the Token API when a client secret for a [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) could not be deleted.
