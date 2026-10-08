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

#### `canModify` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Allows updating, deleting and creating when set, otherwise only read permissions will be allowed.

#### `groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Group reference identifier.

#### `scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum Platform

Scope of the permission.

#### `userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User identifier. Workspace user identifier should be used for the scope 'USER', global user identifier should be used for the scope 'GUEST'.
