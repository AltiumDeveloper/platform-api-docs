---
title: "PlatformWorkspaceRefreshTokenCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-create-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateInput

Input for creating a new `PlatformWorkspaceRefreshToken`.

### Member Of

[`platformWorkspaceRefreshTokenCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create.md) mutation

```graphql
input PlatformWorkspaceRefreshTokenCreateInput {
  accessTokenLifetime: Int
  description: String!
  name: String!
  refreshTokenAbsoluteLifetime: Int
  refreshTokenSlidingLifetime: Int
  returnUrl: String!
}
```

### Fields

#### `PlatformWorkspaceRefreshTokenCreateInput.accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Lifetime of the access token in seconds. Must be greater than zero. Defaults to 3600 (1 hour) when omitted.

#### `PlatformWorkspaceRefreshTokenCreateInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the new `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshTokenCreateInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the new `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshTokenCreateInput.refreshTokenAbsoluteLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Absolute lifetime of the refresh token in seconds. Must be greater than zero. Defaults to 2147483647 (effectively unlimited) when omitted.

#### `PlatformWorkspaceRefreshTokenCreateInput.refreshTokenSlidingLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Sliding lifetime of the refresh token in seconds. Must be greater than zero. Defaults to 2592000 (30 days) when omitted.

#### `PlatformWorkspaceRefreshTokenCreateInput.returnUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL to redirect to after the authorization flow completes. Must be a trusted domain.
