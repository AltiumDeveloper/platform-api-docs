---
title: "DesUpdateProjectPermissionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-permission-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateProjectPermissionInput

Input for updating project permission.

### Member Of

[`DesUpdateProjectPermissionsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-permissions-input.md) input

```graphql
input DesUpdateProjectPermissionInput {
  canModify: Boolean!
  groupId: String
  scope: DesPermissionScope!
  userId: String
}
```

### Fields

#### `DesUpdateProjectPermissionInput.canModify` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Allows updating, deleting and creating when set, otherwise only read permissions will be allowed.

#### `DesUpdateProjectPermissionInput.groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Group reference identifier.

#### `DesUpdateProjectPermissionInput.scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum platform

Scope of the permission.

#### `DesUpdateProjectPermissionInput.userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User identifier. Workspace user identifier should be used for the scope 'USER', global user identifier should be used for the scope 'GUEST'.
