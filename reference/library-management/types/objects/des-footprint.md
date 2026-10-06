---
title: "DesFootprint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesFootprint

A component footprint. Footprints define the space a component occupies.

### Common Data Model

- [Footprint Revision](https://altiumdeveloper.github.io/cdm/classes/lib_FootprintRevision/) — A revision of a Footprint: the PCB footprint as saved into the Workspace at one point in time, with its own lifecycle state. Editing a Workspace Footprint saves it into the next revision; components that still link to an earlier revision become out of date until they are updated.
  - GRID: `grid:workspace:{workspace-id}:library:footprint-revision/{id}`

### Returned By

[`desFootprintById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-footprint-by-id.md) query

### Member Of

[`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object · [`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesFootprintConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection.md) object · [`DesFootprintEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesFootprint implements Node {
  comment: String!
  createdAt: DateTime!
  createdBy: DesUser!
  dataDownloadUrl: String!
  description: String!
  folder: DesFolder
  guid: String! @deprecated
  id: ID!
  imageFullSizeUrl: String!
  imageThumbnailUrl: String!
  itemInternalId: String!
  lifeCycleState: DesLifeCycleState!
  name: String!
  pins: [DesPin!]! @deprecated
  releasedAt: DateTime!
  revisionInternalId: String!
  updatedBy: DesUser!
}
```

### Fields

#### `DesFootprint.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity comment.

#### `DesFootprint.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was created.

#### `DesFootprint.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was created by.

#### `DesFootprint.dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity data download URL.

#### `DesFootprint.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity description.

#### `DesFootprint.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

ECAD entity folder.

#### `DesFootprint.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Footprint node identifier.

#### `DesFootprint.imageFullSizeUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity full size image URL.

#### `DesFootprint.imageThumbnailUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity thumbnail image URL.

#### `DesFootprint.itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Item internal identifier.

#### `DesFootprint.lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object platform

The life cycle state information.

#### `DesFootprint.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity name.

#### `DesFootprint.releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was released.

#### `DesFootprint.revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Revision internal identifier.

#### `DesFootprint.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was last updated by.

#### Deprecated

#### `DesFootprint.guid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `RevisionInternalId` instead.

#### `DesFootprint.pins` · [`[DesPin!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pin.md) **DEPRECATED** non-null object design

> **Deprecated:** Not implemented and may be removed.
