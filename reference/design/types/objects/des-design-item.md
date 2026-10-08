---
title: "DesDesignItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesignItem

A design item is a specific instance of a part used in the design.

### Member Of

[`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object · [`DesDesignItemEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-edge.md) object

```graphql
type DesDesignItem {
  area: DesRectangle @deprecated
  boundingBox: DesRectangle
  comment: String!
  commentThreads: [DesCommentThread!]
  component: DesComponent
  description: String!
  designator: String!
  footprintName: String!
  layer: DesLayer
  mesh3D: DesMesh3D
  pads: [DesPad!]!
  parameters: [DesDesignItemParameter!]!
  pcbId: String
  position: DesPosition2D!
  rotation: Decimal
  schId: String
  tracks(
    where: DesTrackFilterInput
  ): [DesTrack!]!
  vias: [DesVia!]!
}
```

### Fields

#### `boundingBox` · [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) object

The axis-aligned bounding box.

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The additional information for this design item.

#### `commentThreads` · [`[DesCommentThread!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) list object Collaboration

The list of all comment threads related to this design item.

#### `component` · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object Library Management

The detailed component information for this design item.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The summary of function or other performance details for this design item.

#### `designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The unique label for this design item.

#### `footprintName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Design area footprint name.

#### `layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

The layer(side) placement for this design item.

#### `mesh3D` · [`DesMesh3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d.md) object

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object

The list of connection targets for this design item.

#### `parameters` · [`[DesDesignItemParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-parameter.md) non-null object

The list of parameters describing the design item.

#### `pcbId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The PCB identifier.

#### `position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

The planar location for this design item.

#### `rotation` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar

The rotation in degrees.

#### `schId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The schematic identifier.

#### `tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object

The list of conductor segments for this design item.

##### `where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input

#### `vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object

The list of multiple layer connections for this design item.

#### Deprecated

#### `area` · [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) **DEPRECATED** object

> **Deprecated:** Use `boundingBox`.
