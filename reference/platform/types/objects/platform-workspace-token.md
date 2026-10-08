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

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface

Represents a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md), which is used for authentication and authorization when accessing the Altium platform.

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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date-time that the `PlatformWorkspaceToken` was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that created the `PlatformWorkspaceToken`.

#### `deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The date-time that the `PlatformWorkspaceToken` was deleted. Null if the `PlatformWorkspaceToken` has not been deleted.

#### `deletedBy` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that deleted the `PlatformWorkspaceToken`.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The description of the `PlatformWorkspaceToken`.

#### `expiresAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The date-time that the `PlatformWorkspaceToken` expires.

#### `maskedAccessToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The masked value of the `PlatformWorkspaceToken`.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the `PlatformWorkspaceToken`.

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the `PlatformWorkspaceToken`.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date-time that the `PlatformWorkspaceToken` was last updated.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that last updated the `PlatformWorkspaceToken`.

#### `workspaceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the Workspace that the `PlatformWorkspaceToken` belongs to.
