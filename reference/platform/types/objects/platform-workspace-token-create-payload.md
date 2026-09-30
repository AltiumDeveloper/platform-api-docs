---
title: "PlatformWorkspaceTokenCreatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token-create-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceTokenCreatePayload

### Returned By

[`platformWorkspaceTokenCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-token-create.md) mutation

```graphql
type PlatformWorkspaceTokenCreatePayload {
  errors: [PlatformWorkspaceTokenCreateError!]
  redirectUrl: String
}
```

### Fields

#### `PlatformWorkspaceTokenCreatePayload.errors` · [`[PlatformWorkspaceTokenCreateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-workspace-token-create-error.md) list union platform

#### `PlatformWorkspaceTokenCreatePayload.redirectUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
