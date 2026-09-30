---
title: "DesPermissionAvailableActions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesPermissionAvailableActions

### Member Of

[`DesExternalUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-external-user-permission.md) object · [`DesOrganizationPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-organization-permission.md) object · [`DesOwnerPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-owner-permission.md) object · [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface · [`DesWorkspaceGroupPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-permission.md) object · [`DesWorkspaceMembersPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-members-permission.md) object · [`DesWorkspaceUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-permission.md) object

```graphql
type DesPermissionAvailableActions {
  canBeRemoved: Boolean!
  canBeSetToReadOnly: Boolean!
}
```

### Fields

#### `DesPermissionAvailableActions.canBeRemoved` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the permission can be removed.

#### `DesPermissionAvailableActions.canBeSetToReadOnly` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the permission can be set as read-only.
