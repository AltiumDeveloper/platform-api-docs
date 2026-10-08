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

- [Symbol Revision](https://w3id.org/altium/cdm/library/SymbolRevision) — A revision of a Symbol: the schematic symbol as saved into the Workspace at one point in time, with its own lifecycle state. Editing a Workspace Symbol saves it into the next revision; components that still link to an earlier revision become out of date until they are updated.

  - IRI: [`https://w3id.org/altium/cdm/library/SymbolRevision`](https://w3id.org/altium/cdm/library/SymbolRevision)
  - GRID: `grid:workspace:{workspace-id}:library:symbol-revision/{id}`

### Returned By

[`desSymbolById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-symbol-by-id.md) query

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesSymbolConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection.md) object · [`DesSymbolEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

Symbol node identifier.

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

#### `pins` · [`[DesPin!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pin.md) non-null object Design

The list of pins.

#### `releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this revision was released.

#### `revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision internal identifier.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this entity was last updated by.

#### `usedBy` · [`DesSymbolUsedBy!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-used-by.md) non-null object

Reverse relationships showing where this symbol is used.

#### Deprecated

#### `guid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `RevisionInternalId` instead.
