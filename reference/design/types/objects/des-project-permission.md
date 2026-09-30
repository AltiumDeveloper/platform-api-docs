---
title: "DesProjectPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectPermission

A permission associated with the project.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesProjectPermission {
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

#### `DesProjectPermission.canCreate` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows creation of objects within the associated project.

#### `DesProjectPermission.canDelete` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows deletion of the associated project.

#### `DesProjectPermission.canEdit` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows editing the associated project.

#### `DesProjectPermission.canRead` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this permission allows reading of the associated project.

#### `DesProjectPermission.group` · [`DesUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group.md) object platform

The `DesUserGroup` this permission is associated with.

#### `DesProjectPermission.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this project permission.

#### `DesProjectPermission.scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum platform

The permission scope to differentiate different permission types.

#### `DesProjectPermission.user` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The user this project permission is associated with.
