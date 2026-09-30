---
title: "DesWorkspaceMembersPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-members-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceMembersPermission

### Interfaces

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface platform

```graphql
type DesWorkspaceMembersPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `DesWorkspaceMembersPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesWorkspaceMembersPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesWorkspaceMembersPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.
