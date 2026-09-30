---
title: "desFolderByFolderId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-folder-by-folder-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desFolderByFolderId

Searches for a specific folder by its reference identifier.

```graphql
desFolderByFolderId(
  folderId: String!
  workspaceUrl: String!
): DesFolder
```

### Arguments

#### `desFolderByFolderId.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The folder reference identifier.

#### `desFolderByFolderId.workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The workspace URL.

### Type

#### [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

Information about a specific folder.
