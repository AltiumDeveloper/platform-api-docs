---
title: "DesWorkspaceGroupPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceGroupPermission

### Interfaces

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface

```graphql
type DesWorkspaceGroupPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  group: DesWorkspaceGroup!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object

Indicates what actions can be performed on the permission.

#### `group` · [`DesWorkspaceGroup!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) non-null object

The workspace group to which the permission is granted.

#### `trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Trustee's indentificator.

#### `trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object

Indicates read/write permissions.
