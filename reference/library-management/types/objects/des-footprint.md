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

- [Footprint Revision](https://w3id.org/altium/cdm/library/FootprintRevision) — A revision of a Footprint: the PCB footprint as saved into the Workspace at one point in time, with its own lifecycle state. Editing a Workspace Footprint saves it into the next revision; components that still link to an earlier revision become out of date until they are updated.

  - IRI: [`https://w3id.org/altium/cdm/library/FootprintRevision`](https://w3id.org/altium/cdm/library/FootprintRevision)
  - GRID: `grid:workspace:{workspace-id}:library:footprint-revision/{id}`

### Returned By

[`desFootprintById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-footprint-by-id.md) query

### Member Of

[`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object · [`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesFootprintConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection.md) object · [`DesFootprintEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity comment.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this entity was created by.

#### `dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity data download URL.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity description.

#### `folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object Platform

ECAD entity folder.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Footprint node identifier.

#### `imageFullSizeUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity full size image URL.

#### `imageThumbnailUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity thumbnail image URL.

#### `itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Item internal identifier.

#### `lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object Platform

The life cycle state information.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity name.

#### `releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was released.

#### `revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision internal identifier.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this entity was last updated by.

#### Deprecated

#### `guid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `RevisionInternalId` instead.

#### `pins` · [`[DesPin!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pin.md) **DEPRECATED** non-null object Design

> **Deprecated:** Not implemented and may be removed.
