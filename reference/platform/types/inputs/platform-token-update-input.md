---
title: "PlatformTokenUpdateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-update-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformTokenUpdateInput

Input for updating an existing `PlatformToken`. At least one of `name` or `description` must be provided.

### Member Of

[`platformTokenUpdate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-update.md) mutation

```graphql
input PlatformTokenUpdateInput {
  description: String
  name: String
  tokenId: String!
}
```

### Fields

#### `PlatformTokenUpdateInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New description for the `PlatformToken`. Leave null to keep the current description.

#### `PlatformTokenUpdateInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New name for the `PlatformToken`. Leave null to keep the current name.

#### `PlatformTokenUpdateInput.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the `PlatformToken` to update.
