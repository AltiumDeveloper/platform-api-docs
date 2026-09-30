---
title: "DesUpdateProjectPermissionsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-permissions-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateProjectPermissionsInput

Input for updating project permissions.

### Member Of

[`desUpdateProjectPermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-permissions.md) mutation

```graphql
input DesUpdateProjectPermissionsInput {
  permissions: [DesUpdateProjectPermissionInput!]!
  projectId: ID!
  replaceExisting: Boolean
}
```

### Fields

#### `DesUpdateProjectPermissionsInput.permissions` · [`[DesUpdateProjectPermissionInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-permission-input.md) non-null input design

Permissions to update.

#### `DesUpdateProjectPermissionsInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.

#### `DesUpdateProjectPermissionsInput.replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Tells to replace all existing permissions. By default permissions are added to existing.
