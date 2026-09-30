---
title: "DesOrganizationPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-organization-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesOrganizationPermission

### Interfaces

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface platform

```graphql
type DesOrganizationPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  organization: GloOrganization!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `DesOrganizationPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesOrganizationPermission.organization` · [`GloOrganization!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) non-null object platform

The organization to which the permission is granted.

#### `DesOrganizationPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesOrganizationPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.
