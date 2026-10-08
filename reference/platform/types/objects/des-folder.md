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

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this folder was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this folder was created by.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Folder description.

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this folder.

#### `folderPermissions` · [`[DesFolderPermission!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission.md) non-null object

Folder permissions.

#### `folderType` · [`DesFolderType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) non-null enum

Folder type.

#### `itemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The item naming scheme template this folder uses.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Folder name.

#### `parent` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object

Folder parent.

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Folder path.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this folder was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this folder was last updated by.

#### Deprecated

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `folderId` instead.
