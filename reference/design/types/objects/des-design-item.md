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

#### `DesDesignItem.boundingBox` · [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) object design

The axis-aligned bounding box.

#### `DesDesignItem.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The additional information for this design item.

#### `DesDesignItem.commentThreads` · [`[DesCommentThread!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) list object collaboration

The list of all comment threads related to this design item.

#### `DesDesignItem.component` · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object library-management

The detailed component information for this design item.

#### `DesDesignItem.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The summary of function or other performance details for this design item.

#### `DesDesignItem.designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The unique label for this design item.

#### `DesDesignItem.footprintName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Design area footprint name.

#### `DesDesignItem.layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

The layer(side) placement for this design item.

#### `DesDesignItem.mesh3D` · [`DesMesh3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d.md) object design

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `DesDesignItem.pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object design

The list of connection targets for this design item.

#### `DesDesignItem.parameters` · [`[DesDesignItemParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-parameter.md) non-null object design

The list of parameters describing the design item.

#### `DesDesignItem.pcbId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The PCB identifier.

#### `DesDesignItem.position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

The planar location for this design item.

#### `DesDesignItem.rotation` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar common

The rotation in degrees.

#### `DesDesignItem.schId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The schematic identifier.

#### `DesDesignItem.tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object design

The list of conductor segments for this design item.

##### `DesDesignItem.tracks.where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input design

#### `DesDesignItem.vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object design

The list of multiple layer connections for this design item.

#### Deprecated

#### `DesDesignItem.area` · [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) **DEPRECATED** object design

> **Deprecated:** Use `boundingBox`.
