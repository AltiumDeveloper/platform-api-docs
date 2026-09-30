---
title: "DesExternalUserPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-external-user-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesExternalUserPermission

### Interfaces

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface platform

```graphql
type DesExternalUserPermission implements DesPermission {
  availableActions: DesPermissionAvailableActions!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
  user: GloUser!
}
```

### Fields

#### `DesExternalUserPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesExternalUserPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesExternalUserPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.

#### `DesExternalUserPermission.user` · [`GloUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) non-null object platform

The external user to whom the permission is granted.
