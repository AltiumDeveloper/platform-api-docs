---
title: "DesDeleteFolderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-delete-folder-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteFolderInput

Input for deleting a folder.

### Member Of

[`desDeleteFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-folder.md) mutation

```graphql
input DesDeleteFolderInput {
  folderId: String
  id: ID @deprecated
  workspaceUrl: String
}
```

### Fields

#### `DesDeleteFolderInput.folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Reference identifier of the folder to delete.

#### `DesDeleteFolderInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL of the workspace in which the folder exists.

#### Deprecated

#### `DesDeleteFolderInput.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Use `workspaceUrl` and `folderId` instead.
