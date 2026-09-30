---
title: "DesCreateFolderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-folder-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateFolderInput

Input for folder creation.

### Member Of

[`desCreateFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-folder.md) mutation

```graphql
input DesCreateFolderInput {
  description: String
  folderType: DesFolderType!
  itemNamingSchemeTemplate: String
  name: String!
  parentFolderId: String
  parentId: ID @deprecated
  permissions: [DesUpdateFolderPermissionInput!]
  workspaceUrl: String
}
```

### Fields

#### `DesCreateFolderInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Folder description.

#### `DesCreateFolderInput.folderType` · [`DesFolderType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) non-null enum platform

Folder type.

#### `DesCreateFolderInput.itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Naming scheme for the folder items.

#### `DesCreateFolderInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Folder name.

#### `DesCreateFolderInput.parentFolderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Reference identifier of the parent folder. If both `parentId` and `parentFolderId` are omitted or set to `null`, the folder will be placed under the library root.

#### `DesCreateFolderInput.permissions` · [`[DesUpdateFolderPermissionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) list input platform

Folder permissions (non recursive).

#### `DesCreateFolderInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL of the workspace into which the folder has to be created.

#### Deprecated

#### `DesCreateFolderInput.parentId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Use `parentFolderId` instead.
