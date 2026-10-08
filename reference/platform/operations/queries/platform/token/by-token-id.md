---
title: "platform.token.byTokenId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-token-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.token.byTokenId

Gets the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) with the specified identifier.

### Type

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface

Represents a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md), which is used for authentication and authorization when accessing the Altium platform.

```graphql
platform {
  token {
    byTokenId(
      tokenId: String!
    ): PlatformToken
  }
}
```

### Arguments

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier for the Token.
