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

### Type

#### [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object

Information about a specific folder.

```graphql
desFolderByFolderId(
  folderId: String!
  workspaceUrl: String!
): DesFolder
```

### Arguments

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The folder reference identifier.

#### `workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The workspace URL.
