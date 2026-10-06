---
title: "DesSymbol"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSymbol

A component symbol. These represent the body and the pins on the physical component.

### Common Data Model

- [Symbol Revision](https://altiumdeveloper.github.io/cdm/classes/lib_SymbolRevision/) — A revision of a Symbol: the schematic symbol as saved into the Workspace at one point in time, with its own lifecycle state. Editing a Workspace Symbol saves it into the next revision; components that still link to an earlier revision become out of date until they are updated.
  - GRID: `grid:workspace:{workspace-id}:library:symbol-revision/{id}`

### Returned By

[`desSymbolById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-symbol-by-id.md) query

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesSymbolConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection.md) object · [`DesSymbolEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesSymbol implements Node {
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
  pins: [DesPin!]!
  releasedAt: DateTime!
  revisionInternalId: String!
  updatedBy: DesUser!
  usedBy: DesSymbolUsedBy!
}
```

### Fields

#### `DesSymbol.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity comment.

#### `DesSymbol.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was created.

#### `DesSymbol.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was created by.

#### `DesSymbol.dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity data download URL.

#### `DesSymbol.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity description.

#### `DesSymbol.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

ECAD entity folder.

#### `DesSymbol.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Symbol node identifier.

#### `DesSymbol.imageFullSizeUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity full size image URL.

#### `DesSymbol.imageThumbnailUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity thumbnail image URL.

#### `DesSymbol.itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Item internal identifier.

#### `DesSymbol.lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object platform

The life cycle state information.

#### `DesSymbol.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity name.

#### `DesSymbol.pins` · [`[DesPin!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pin.md) non-null object design

The list of pins.

#### `DesSymbol.releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this revision was released.

#### `DesSymbol.revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Revision internal identifier.

#### `DesSymbol.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was last updated by.

#### `DesSymbol.usedBy` · [`DesSymbolUsedBy!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-used-by.md) non-null object library-management

Reverse relationships showing where this symbol is used.

#### Deprecated

#### `DesSymbol.guid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `RevisionInternalId` instead.
