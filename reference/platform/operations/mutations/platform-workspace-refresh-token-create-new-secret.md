---
title: "platformWorkspaceRefreshTokenCreateNewSecret"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create-new-secret"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformWorkspaceRefreshTokenCreateNewSecret

Creates a new client secret for an existing [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md). Returns the newly generated secret along with the [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

### Type

#### [`PlatformWorkspaceRefreshTokenCreateNewSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-new-secret-payload.md) object

Payload for creating a new client secret for a [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

```graphql
platformWorkspaceRefreshTokenCreateNewSecret(
  input: PlatformWorkspaceRefreshTokenCreateNewSecretInput!
): PlatformWorkspaceRefreshTokenCreateNewSecretPayload!
```

### Arguments

#### `input` · [`PlatformWorkspaceRefreshTokenCreateNewSecretInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-create-new-secret-input.md) non-null input
