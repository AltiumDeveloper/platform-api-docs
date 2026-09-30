---
title: "DesFolderPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesFolderPermission

Information about a folder permission.

### Member Of

[`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object

```graphql
type DesFolderPermission {
  canCreate: Boolean!
  canDelete: Boolean!
  canEdit: Boolean!
  canRead: Boolean!
  group: DesUserGroup
  name: String!
  scope: DesPermissionScope!
  user: DesUser
}
```

### Fields

#### `DesFolderPermission.canCreate` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows creation of objects within the associated folder.

#### `DesFolderPermission.canDelete` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows deletion of the associated folder.

#### `DesFolderPermission.canEdit` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows editing the associated folder.

#### `DesFolderPermission.canRead` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows reading of the associated folder.

#### `DesFolderPermission.group` · [`DesUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group.md) object platform

The `DesUserGroup` this permission is associated with.

#### `DesFolderPermission.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this permission.

#### `DesFolderPermission.scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum platform

The permission scope to differentiate different permission types.

#### `DesFolderPermission.user` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The user this permission is associated with.
