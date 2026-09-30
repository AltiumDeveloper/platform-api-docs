---
title: "PlatformToken"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token"
bounded_context: "Platform"
kind: "interfaces"
experimental: false
deprecated: false
---

# PlatformToken

Represents a `PlatformToken`, which is used for authentication and authorization when accessing the Altium platform.

### Returned By

[`platform.token.byTokenId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-token-id.md) query

### Member Of

[`PlatformTokenConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-connection.md) object · [`PlatformTokenEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-edge.md) object · [`PlatformTokenUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-payload.md) object

### Implemented By

[`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) object · [`PlatformWorkspaceToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token.md) object

```graphql
interface PlatformToken {
  createdAt: DateTime!
  deletedAt: DateTime
  description: String!
  expiresAt: DateTime
  name: String!
  tokenId: String!
  updatedAt: DateTime!
}
```

### Fields

#### `PlatformToken.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformToken` was created.

#### `PlatformToken.deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformToken` was deleted. Null if the `PlatformToken` has not been deleted.

#### `PlatformToken.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The description of the `PlatformToken`.

#### `PlatformToken.expiresAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformToken` expires.

#### `PlatformToken.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the `PlatformToken`.

#### `PlatformToken.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the `PlatformToken`.

#### `PlatformToken.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformToken` was last updated.
