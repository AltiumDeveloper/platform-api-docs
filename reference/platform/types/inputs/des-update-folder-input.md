---
title: "DesUpdateFolderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFolderInput

Input for updating folder.

### Member Of

[`desUpdateFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-folder.md) mutation

```graphql
input DesUpdateFolderInput {
  description: String
  folderId: String
  folderType: DesFolderType
  id: ID @deprecated
  itemNamingSchemeTemplate: String
  name: String
  permissions: [DesUpdateFolderPermissionInput!]
  workspaceUrl: String
}
```

### Fields

#### `DesUpdateFolderInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New description of the folder. Not updated if omitted or set to `null`.

#### `DesUpdateFolderInput.folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Reference identifier for the folder to update.

#### `DesUpdateFolderInput.folderType` · [`DesFolderType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) enum platform

New folder type. Not updated if omitted or set to `null`.

#### `DesUpdateFolderInput.itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New naming scheme for the folder items. Not updated if omitted or set to `null`.

#### `DesUpdateFolderInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New name of the folder. Not updated if omitted or set to `null`.

#### `DesUpdateFolderInput.permissions` · [`[DesUpdateFolderPermissionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) list input platform

New folder permissions (non recursive). Not updated if omitted or set to `null`.

#### `DesUpdateFolderInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL of the workspace in which the folder exists.

#### Deprecated

#### `DesUpdateFolderInput.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Use `workspaceUrl` and `folderId` instead.
