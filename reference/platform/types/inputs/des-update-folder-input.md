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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New description of the folder. Not updated if omitted or set to `null`.

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier for the folder to update.

#### `folderType` · [`DesFolderType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) enum

New folder type. Not updated if omitted or set to `null`.

#### `itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New naming scheme for the folder items. Not updated if omitted or set to `null`.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New name of the folder. Not updated if omitted or set to `null`.

#### `permissions` · [`[DesUpdateFolderPermissionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) list input

New folder permissions (non recursive). Not updated if omitted or set to `null`.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of the workspace in which the folder exists.

#### Deprecated

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `workspaceUrl` and `folderId` instead.
