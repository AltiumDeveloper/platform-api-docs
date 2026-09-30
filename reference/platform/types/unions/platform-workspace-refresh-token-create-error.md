---
title: "PlatformWorkspaceRefreshTokenCreateError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateError

### Member Of

[`PlatformWorkspaceRefreshTokenCreatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-payload.md) object

```graphql
union PlatformWorkspaceRefreshTokenCreateError = PlatformTokenNameExistsError | PlatformTokenWorkspaceAccessDeniedError | PlatformTokenGenerationError | PlatformTokenQuotaExceededError | PlatformTokenInvalidTokenLifetimeError
```

### Possible types

#### [`PlatformWorkspaceRefreshTokenCreateError.PlatformTokenNameExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-name-exists-error.md) object platform

Error that occurs when the input `PlatformToken` name already exists.

#### [`PlatformWorkspaceRefreshTokenCreateError.PlatformTokenWorkspaceAccessDeniedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-workspace-access-denied-error.md) object platform

Error that occurs when access to a workspace is denied for a `PlatformToken`.

#### [`PlatformWorkspaceRefreshTokenCreateError.PlatformTokenGenerationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-generation-error.md) object platform

Error that occurs when the `PlatformToken` has not been successfully generated.

#### [`PlatformWorkspaceRefreshTokenCreateError.PlatformTokenQuotaExceededError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-quota-exceeded-error.md) object platform

Error that occurs when the maximum number of `PlatformToken` for a workspace has been reached.

#### [`PlatformWorkspaceRefreshTokenCreateError.PlatformTokenInvalidTokenLifetimeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-invalid-token-lifetime-error.md) object platform

Error returned by the Token API when an input token lifetime for a new `PlatformToken` is invalid.
