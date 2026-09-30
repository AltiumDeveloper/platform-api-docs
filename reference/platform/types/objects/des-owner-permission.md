---
title: "DesOwnerPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-owner-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesOwnerPermission

### Interfaces

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface platform

```graphql
type DesOwnerPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  owner: DesWorkspaceUser!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `DesOwnerPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesOwnerPermission.owner` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

The entity's owner.

#### `DesOwnerPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesOwnerPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.
