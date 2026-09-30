---
title: "PlatformWorkspaceToken"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceToken

Represents a `PlatformWorkspaceToken`, which is used for authentication and authorization when accessing the Altium platform.

### Interfaces

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface platform

Represents a `PlatformToken`, which is used for authentication and authorization when accessing the Altium platform.

```graphql
type PlatformWorkspaceToken implements PlatformToken {
  createdAt: DateTime!
  createdBy: DesUser!
  deletedAt: DateTime
  deletedBy: DesUser
  description: String!
  expiresAt: DateTime
  maskedAccessToken: String
  name: String!
  tokenId: String!
  updatedAt: DateTime!
  updatedBy: DesUser!
  workspaceId: String!
}
```

### Fields

#### `PlatformWorkspaceToken.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformWorkspaceToken` was created.

#### `PlatformWorkspaceToken.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The `DesUser` that created the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformWorkspaceToken` was deleted. Null if the `PlatformWorkspaceToken` has not been deleted.

#### `PlatformWorkspaceToken.deletedBy` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The `DesUser` that deleted the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The description of the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.expiresAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the `PlatformWorkspaceToken` expires.

#### `PlatformWorkspaceToken.maskedAccessToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The masked value of the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the `PlatformWorkspaceToken` was last updated.

#### `PlatformWorkspaceToken.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The `DesUser` that last updated the `PlatformWorkspaceToken`.

#### `PlatformWorkspaceToken.workspaceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the Workspace that the `PlatformWorkspaceToken` belongs to.
