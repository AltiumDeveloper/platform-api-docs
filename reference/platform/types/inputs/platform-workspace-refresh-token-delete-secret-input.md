---
title: "PlatformWorkspaceRefreshTokenDeleteSecretInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-delete-secret-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenDeleteSecretInput

### Member Of

[`platformWorkspaceRefreshTokenDeleteSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-delete-secret.md) mutation

```graphql
input PlatformWorkspaceRefreshTokenDeleteSecretInput {
  clientSecret: String!
  tokenId: String!
}
```

### Fields

#### `clientSecret` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The client secret to delete from the [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) to delete the secret for.
