---
title: "desFolderById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/des-folder-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: true
---

# desFolderById

> **Deprecated:** Use `DesFolderByFolderId` instead.

```graphql
desFolderById(
  id: ID!
): DesFolder @deprecated
```

### Arguments

#### `desFolderById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for a folder.

### Type

#### [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

Information about a specific folder.
