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

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface

```graphql
type DesOrganizationPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  organization: GloOrganization!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object

Indicates what actions can be performed on the permission.

#### `organization` · [`GloOrganization!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) non-null object

The organization to which the permission is granted.

#### `trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Trustee's indentificator.

#### `trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object

Indicates read/write permissions.
