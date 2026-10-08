---
title: "PlatformWorkspaceTokenCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-token-create-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceTokenCreateInput

Input for creating a new [`PlatformWorkspaceToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token.md).

### Member Of

[`platformWorkspaceTokenCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-workspace-token-create.md) mutation

```graphql
input PlatformWorkspaceTokenCreateInput {
  accessTokenLifetime: Int
  description: String!
  name: String!
  returnUrl: String!
}
```

### Fields

#### `accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Lifetime of the access token in seconds. Must be greater than zero. Defaults to 3600 (1 hour) when omitted.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the new [`PlatformWorkspaceToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token.md).

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the new [`PlatformWorkspaceToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token.md).

#### `returnUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL to redirect to after the authorization flow completes. Must be a trusted domain.
