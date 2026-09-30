---
title: "DesFolder"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesFolder

Information about a specific folder.

### Returned By

[`desFolderByFolderId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-folder-by-folder-id.md) query · [`desFolderById`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/des-folder-by-id.md) query

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) object · [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) object · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object · [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object · [`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object · [`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) object · [`DesSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-simulation.md) object · [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesFolder implements Node {
  createdAt: DateTime!
  createdBy: DesUser!
  description: String!
  folderId: String!
  folderPermissions: [DesFolderPermission!]!
  folderType: DesFolderType!
  id: ID! @deprecated
  itemNamingSchemeTemplate: String
  name: String!
  parent: DesFolder
  path: String!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesFolder.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this folder was created.

#### `DesFolder.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this folder was created by.

#### `DesFolder.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Folder description.

#### `DesFolder.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this folder.

#### `DesFolder.folderPermissions` · [`[DesFolderPermission!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission.md) non-null object platform

Folder permissions.

#### `DesFolder.folderType` · [`DesFolderType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) non-null enum platform

Folder type.

#### `DesFolder.itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The item naming scheme template this folder uses.

#### `DesFolder.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Folder name.

#### `DesFolder.parent` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

Folder parent.

#### `DesFolder.path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Folder path.

#### `DesFolder.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this folder was last updated at.

#### `DesFolder.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this folder was last updated by.

#### Deprecated

#### `DesFolder.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `folderId` instead.
