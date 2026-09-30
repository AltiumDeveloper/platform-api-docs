---
title: "DesTrusteePermissions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesTrusteePermissions

### Member Of

[`DesExternalUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-external-user-permission.md) object · [`DesOrganizationPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-organization-permission.md) object · [`DesOwnerPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-owner-permission.md) object · [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface · [`DesWorkspaceGroupPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-permission.md) object · [`DesWorkspaceMembersPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-members-permission.md) object · [`DesWorkspaceUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-permission.md) object

```graphql
type DesTrusteePermissions {
  canEdit: Boolean!
}
```

### Fields

#### `DesTrusteePermissions.canEdit` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates read/write permissions.
