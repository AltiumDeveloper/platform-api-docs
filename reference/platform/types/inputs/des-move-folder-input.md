---
title: "DesMoveFolderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-move-folder-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesMoveFolderInput

Input for moving a folder.

### Member Of

[`desMoveFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-move-folder.md) mutation

```graphql
input DesMoveFolderInput {
  folderId: String
  id: ID @deprecated
  parentFolderId: String
  parentId: ID @deprecated
  workspaceUrl: String
}
```

### Fields

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier for the folder to update.

#### `parentFolderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier of the parent folder. If both `parentId` and `parentFolderId` are omitted or set to `null`, the folder will be placed under the library root.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of the workspace in which the folder and parent folder (if used) exist.

#### Deprecated

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `workspaceUrl` and `folderId` instead.

#### `parentId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `workspaceUrl` and `parentFolderId` instead.
