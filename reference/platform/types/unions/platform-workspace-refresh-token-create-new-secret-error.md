---
title: "PlatformWorkspaceRefreshTokenCreateNewSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-new-secret-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateNewSecretError

### Member Of

[`PlatformWorkspaceRefreshTokenCreateNewSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-new-secret-payload.md) object

```graphql
union PlatformWorkspaceRefreshTokenCreateNewSecretError = PlatformTokenNotFoundError | PlatformRefreshTokenCreateNewSecretError
```

### Possible types

#### [`PlatformWorkspaceRefreshTokenCreateNewSecretError.PlatformTokenNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error.md) object platform

Error that occurs when a `PlatformToken` with the specified identifier could not be found.

#### [`PlatformWorkspaceRefreshTokenCreateNewSecretError.PlatformRefreshTokenCreateNewSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-refresh-token-create-new-secret-error.md) object platform

Error returned by the Token API when a new client secret for a `PlatformWorkspaceRefreshToken` could not be created.
