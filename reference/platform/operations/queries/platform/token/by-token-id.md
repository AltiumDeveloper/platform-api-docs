---
title: "platform.token.byTokenId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-token-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.token.byTokenId

Gets the `PlatformToken` with the specified identifier.

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

#### `byTokenId.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier for the Token.

### Type

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface platform

Represents a `PlatformToken`, which is used for authentication and authorization when accessing the Altium platform.
