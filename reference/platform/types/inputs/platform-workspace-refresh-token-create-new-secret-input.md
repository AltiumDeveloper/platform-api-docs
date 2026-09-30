---
title: "PlatformWorkspaceRefreshTokenCreateNewSecretInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-create-new-secret-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateNewSecretInput

### Member Of

[`platformWorkspaceRefreshTokenCreateNewSecret`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create-new-secret.md) mutation

```graphql
input PlatformWorkspaceRefreshTokenCreateNewSecretInput {
  tokenId: String!
}
```

### Fields

#### `PlatformWorkspaceRefreshTokenCreateNewSecretInput.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the `PlatformWorkspaceRefreshToken` to create a new secret for.
