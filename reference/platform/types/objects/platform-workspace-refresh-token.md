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

#### [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface

Represents a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md), which is used for authentication and authorization when accessing the Altium platform.

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

#### `clientId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The client identifier for the \*OAuth 2.0 client\* associated with this `PlatformWorkspaceRefreshToken`.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date-time that the `PlatformWorkspaceRefreshToken` was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that created the `PlatformWorkspaceRefreshToken`.

#### `deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The date-time that the `PlatformWorkspaceRefreshToken` was deleted. Null if the `PlatformWorkspaceRefreshToken` has not been deleted.

#### `deletedBy` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that deleted the `PlatformWorkspaceRefreshToken`.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The description of the `PlatformWorkspaceRefreshToken`.

#### `expiresAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The date-time that the `PlatformWorkspaceRefreshToken` expires.

#### `maskedRefreshToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The masked value of the `PlatformWorkspaceRefreshToken`.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the `PlatformWorkspaceRefreshToken`.

#### `tokenId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the `PlatformWorkspaceRefreshToken`.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date-time that the `PlatformWorkspaceRefreshToken` was last updated.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) that last updated the `PlatformWorkspaceRefreshToken`.

#### `workspaceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the Workspace that the `PlatformWorkspaceRefreshToken` belongs to.
