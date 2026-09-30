---
title: "PlatformWorkspaceRefreshTokenCreatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshTokenCreatePayload

### Returned By

[`platformWorkspaceRefreshTokenCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-refresh-token-create.md) mutation

```graphql
type PlatformWorkspaceRefreshTokenCreatePayload {
  errors: [PlatformWorkspaceRefreshTokenCreateError!]
  redirectUrl: String
}
```

### Fields

#### `PlatformWorkspaceRefreshTokenCreatePayload.errors` · [`[PlatformWorkspaceRefreshTokenCreateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-refresh-token-create-error.md) list union platform

#### `PlatformWorkspaceRefreshTokenCreatePayload.redirectUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
