---
title: "PlatformWorkspaceRefreshTokenCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-refresh-token-create-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreateInput

Input for creating a new [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

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

#### `accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Lifetime of the access token in seconds. Must be greater than zero. Defaults to 3600 (1 hour) when omitted.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the new [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the new [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md).

#### `refreshTokenAbsoluteLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Absolute lifetime of the refresh token in seconds. Must be greater than zero. Defaults to 2147483647 (effectively unlimited) when omitted.

#### `refreshTokenSlidingLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Sliding lifetime of the refresh token in seconds. Must be greater than zero. Defaults to 2592000 (30 days) when omitted.

#### `returnUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL to redirect to after the authorization flow completes. Must be a trusted domain.
