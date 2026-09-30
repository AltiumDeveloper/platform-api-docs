---
title: "PlatformWorkspaceTokenCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-workspace-token-create-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformWorkspaceTokenCreateInput

Input for creating a new `PlatformWorkspaceToken`.

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

#### `PlatformWorkspaceTokenCreateInput.accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Lifetime of the access token in seconds. Must be greater than zero. Defaults to 3600 (1 hour) when omitted.

#### `PlatformWorkspaceTokenCreateInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the new `PlatformWorkspaceToken`.

#### `PlatformWorkspaceTokenCreateInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the new `PlatformWorkspaceToken`.

#### `PlatformWorkspaceTokenCreateInput.returnUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL to redirect to after the authorization flow completes. Must be a trusted domain.
