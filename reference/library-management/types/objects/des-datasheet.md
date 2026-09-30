---
title: "DesDatasheet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesDatasheet

A component datasheet.

### Common Data Model

- [Datasheet](https://altiumdeveloper.github.io/cdm/classes/lib_Datasheet/) — Datasheet represents a technical document associated with a Component or Part, providing authoritative specifications, electrical characteristics, and manufacturer information.
  - GRID: `grid:workspace:{workspace-id}:library:datasheet/{id}`

### Returned By

[`desDatasheetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-datasheet-by-id.md) query

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesDatasheetConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection.md) object · [`DesDatasheetEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesDatasheet implements Node {
  comment: String!
  createdBy: DesUser!
  dataDownloadUrl: String!
  description: String!
  folder: DesFolder
  id: ID!
  itemInternalId: String!
  name: String!
  revisionInternalId: String!
  updatedBy: DesUser!
}
```

### Fields

#### `DesDatasheet.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity comment.

#### `DesDatasheet.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was created by.

#### `DesDatasheet.dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity data download URL.

#### `DesDatasheet.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity description.

#### `DesDatasheet.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

ECAD entity folder.

#### `DesDatasheet.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Datasheet node identifier.

#### `DesDatasheet.itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Item internal identifier.

#### `DesDatasheet.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity name.

#### `DesDatasheet.revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Revision internal identifier.

#### `DesDatasheet.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was last updated by.
