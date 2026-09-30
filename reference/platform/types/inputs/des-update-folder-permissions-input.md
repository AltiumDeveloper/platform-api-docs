---
title: "DesUpdateFolderPermissionsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permissions-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFolderPermissionsInput

Input for updating folder permissions.

### Member Of

[`desUpdateFolderPermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-folder-permissions.md) mutation

```graphql
input DesUpdateFolderPermissionsInput {
  folderId: ID!
  permissions: [DesUpdateFolderPermissionInput!]!
  replaceExisting: Boolean
  workspaceUrl: String
}
```

### Fields

#### `DesUpdateFolderPermissionsInput.folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Folder identifier for updating folder permissions. Soon, `folderId` will be the reference identifier (GUID) instead of node identifier, and should be used along with `workspaceUrl`.

#### `DesUpdateFolderPermissionsInput.permissions` · [`[DesUpdateFolderPermissionInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) non-null input platform

Permissions to update.

#### `DesUpdateFolderPermissionsInput.replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Tells to replace all existing permissions. By default permissions are added to existing.

#### `DesUpdateFolderPermissionsInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL of the workspace in which the folder exists.
