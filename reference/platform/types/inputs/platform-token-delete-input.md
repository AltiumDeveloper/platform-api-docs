---
title: "PlatformTokenDeleteInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-delete-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformTokenDeleteInput

### Member Of

[`platformTokenDelete`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-delete.md) mutation

```graphql
input PlatformTokenDeleteInput {
  tokenId: String!
}
```

### Fields

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) to delete.
