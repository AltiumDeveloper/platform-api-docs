---
title: "platformWorkspaceRefreshTokenCreateNewSecret"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create-new-secret"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformWorkspaceRefreshTokenCreateNewSecret

Creates a new client secret for an existing `PlatformWorkspaceRefreshToken`. Returns the newly generated secret along with the `PlatformWorkspaceRefreshToken`.

```graphql
platformWorkspaceRefreshTokenCreateNewSecret(
  input: PlatformWorkspaceRefreshTokenCreateNewSecretInput!
): PlatformWorkspaceRefreshTokenCreateNewSecretPayload!
```

### Arguments

#### `platformWorkspaceRefreshTokenCreateNewSecret.input` · [`PlatformWorkspaceRefreshTokenCreateNewSecretInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-create-new-secret-input.md) non-null input platform

### Type

#### [`PlatformWorkspaceRefreshTokenCreateNewSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-new-secret-payload.md) object platform

Payload for creating a new client secret for a `PlatformWorkspaceRefreshToken`.
