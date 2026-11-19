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

#### `folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Folder identifier for updating folder permissions. Pass the reference identifier (GUID) along with `workspaceUrl`, or the legacy node identifier (deprecated).

#### `permissions` · [`[DesUpdateFolderPermissionInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) non-null input

Permissions to update.

#### `replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Tells to replace all existing permissions. By default permissions are added to existing.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of the workspace in which the folder exists.
