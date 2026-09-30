---
title: "PlatformWorkspaceRefreshToken"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceRefreshToken

Represents a `PlatformWorkspaceRefreshToken`, which is used for authentication and authorization when accessing the Altium platform.

### Member Of

[`PlatformWorkspaceRefreshTokenCreateNewSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-create-new-secret-payload.md) object · [`PlatformWorkspaceRefreshTokenDeleteSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token-delete-secret-payload.md) object

### Interfaces

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface platform

Represents a `PlatformToken`, which is used for authentication and authorization when accessing the Altium platform.

```graphql
type PlatformWorkspaceRefreshToken implements PlatformToken {
  clientId: String
  createdAt: DateTime!
  createdBy: DesUser!
  deletedAt: DateTime
  deletedBy: DesUser
  description: String!
  expiresAt: DateTime
  maskedRefreshToken: String
  name: String!
  tokenId: String!
  updatedAt: DateTime!
  updatedBy: DesUser!
  workspaceId: String!
}
```

### Fields

#### `PlatformWorkspaceRefreshToken.clientId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The client identifier for the \*OAuth 2.0 client\* associated with this `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformWorkspaceRefreshToken` was created.

#### `PlatformWorkspaceRefreshToken.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The `DesUser` that created the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformWorkspaceRefreshToken` was deleted. Null if the `PlatformWorkspaceRefreshToken` has not been deleted.

#### `PlatformWorkspaceRefreshToken.deletedBy` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The `DesUser` that deleted the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The description of the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.expiresAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformWorkspaceRefreshToken` expires.

#### `PlatformWorkspaceRefreshToken.maskedRefreshToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The masked value of the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformWorkspaceRefreshToken` was last updated.

#### `PlatformWorkspaceRefreshToken.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The `DesUser` that last updated the `PlatformWorkspaceRefreshToken`.

#### `PlatformWorkspaceRefreshToken.workspaceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the Workspace that the `PlatformWorkspaceRefreshToken` belongs to.
