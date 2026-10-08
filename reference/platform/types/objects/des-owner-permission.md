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

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface

```graphql
type DesOwnerPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  owner: DesWorkspaceUser!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object

Indicates what actions can be performed on the permission.

#### `owner` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object

The entity's owner.

#### `trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Trustee's indentificator.

#### `trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object

Indicates read/write permissions.
