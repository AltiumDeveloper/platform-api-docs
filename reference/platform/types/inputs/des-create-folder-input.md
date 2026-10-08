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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Folder description.

#### `folderType` · [`DesFolderType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) non-null enum

Folder type.

#### `itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Naming scheme for the folder items.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Folder name.

#### `parentFolderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier of the parent folder. If both `parentId` and `parentFolderId` are omitted or set to `null`, the folder will be placed under the library root.

#### `permissions` · [`[DesUpdateFolderPermissionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) list input

Folder permissions (non recursive).

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of the workspace into which the folder has to be created.

#### Deprecated

#### `parentId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `parentFolderId` instead.
