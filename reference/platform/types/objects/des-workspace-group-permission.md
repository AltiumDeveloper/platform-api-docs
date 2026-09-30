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

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface platform

```graphql
type DesWorkspaceGroupPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  group: DesWorkspaceGroup!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `DesWorkspaceGroupPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesWorkspaceGroupPermission.group` · [`DesWorkspaceGroup!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) non-null object platform

The workspace group to which the permission is granted.

#### `DesWorkspaceGroupPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesWorkspaceGroupPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.
