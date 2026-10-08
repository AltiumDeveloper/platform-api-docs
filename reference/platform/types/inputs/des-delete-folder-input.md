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

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier of the folder to delete.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of the workspace in which the folder exists.

#### Deprecated

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `workspaceUrl` and `folderId` instead.
