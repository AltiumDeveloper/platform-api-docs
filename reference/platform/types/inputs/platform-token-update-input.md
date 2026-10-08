---
title: "PlatformTokenUpdateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-update-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformTokenUpdateInput

Input for updating an existing [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md). At least one of `name` or `description` must be provided.

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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New description for the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md). Leave null to keep the current description.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New name for the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md). Leave null to keep the current name.

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) to update.
