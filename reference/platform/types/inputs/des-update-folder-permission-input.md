---
title: "DesUpdateFolderPermissionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFolderPermissionInput

Input for updating folder permission.

### Member Of

[`DesCreateFolderInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-folder-input.md) input · [`DesUpdateFolderInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-input.md) input · [`DesUpdateFolderPermissionsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permissions-input.md) input

```graphql
input DesUpdateFolderPermissionInput {
  canModify: Boolean!
  groupId: String
  scope: DesPermissionScope!
  userId: String
}
```

### Fields

#### `canModify` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Allows updating, deleting and creating when set, otherwise only read permissions will be allowed.

#### `groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Group reference identifier.

#### `scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum

Scope of the permission.

#### `userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Workspace user identifier.
