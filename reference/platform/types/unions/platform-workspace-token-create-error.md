---
title: "PlatformWorkspaceTokenCreateError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformWorkspaceTokenCreateError

### Member Of

[`PlatformWorkspaceTokenCreatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token-create-payload.md) object

```graphql
union PlatformWorkspaceTokenCreateError = PlatformTokenNameExistsError | PlatformTokenWorkspaceAccessDeniedError | PlatformTokenGenerationError | PlatformTokenQuotaExceededError | PlatformTokenInvalidTokenLifetimeError
```

### Possible types

#### [`PlatformTokenNameExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-name-exists-error.md) object

Error that occurs when the input [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) name already exists.

#### [`PlatformTokenWorkspaceAccessDeniedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-workspace-access-denied-error.md) object

Error that occurs when access to a workspace is denied for a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md).

#### [`PlatformTokenGenerationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-generation-error.md) object

Error that occurs when the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) has not been successfully generated.

#### [`PlatformTokenQuotaExceededError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-quota-exceeded-error.md) object

Error that occurs when the maximum number of [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) for a workspace has been reached.

#### [`PlatformTokenInvalidTokenLifetimeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-invalid-token-lifetime-error.md) object

Error returned by the Token API when an input token lifetime for a new [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) is invalid.
