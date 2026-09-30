---
title: "DesPcb"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPcb

A PCB contains design details of the physical product.

### Member Of

[`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object · [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object

```graphql
type DesPcb {
  area: DesArea!
  commentThreads: [DesCommentThread!]!
  designItems(
    after: String
    before: String
    designators: [String!]
    first: Int
    last: Int
    where: DesDesignItemFilterInput
  ): DesDesignItemConnection
  documentId: String!
  documentName: String!
  layerStack: DesStackup
  mesh3D: DesMesh3D
  nets(
    names: [String!]
  ): [DesNet!]!
  origin: DesPosition2D!
  outline: DesPolygon!
  pads: [DesPad!]!
  size: DesSize2D!
  tracks(
    where: DesTrackFilterInput
  ): [DesTrack!]!
  vias: [DesVia!]!
}
```

### Fields

#### `DesPcb.area` · [`DesArea!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-area.md) non-null object design

The total area contained by the PCB outline.

#### `DesPcb.commentThreads` · [`[DesCommentThread!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) non-null object collaboration

The list of all comment threads related to this PCB.

#### `DesPcb.designItems` · [`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object design

PCB items, instances of `DesComponent`, returned by pages.

##### `DesPcb.designItems.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesPcb.designItems.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesPcb.designItems.designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

\*\*DEPRECATED\*\* Use `where: {designator: {in: ...}}`.

##### `DesPcb.designItems.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesPcb.designItems.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesPcb.designItems.where` · [`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input design

#### `DesPcb.documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this PCB.

#### `DesPcb.documentName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The document file name.

#### `DesPcb.layerStack` · [`DesStackup`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stackup.md) object design

The details of the layer structure of this PCB.

#### `DesPcb.mesh3D` · [`DesMesh3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d.md) object design

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `DesPcb.nets` · [`[DesNet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) non-null object design

The list of all electrically connected regions in this PCB.

##### `DesPcb.nets.names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

An optional array of names to search.

#### `DesPcb.origin` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

The location of the coordinate system origin.

#### `DesPcb.outline` · [`DesPolygon!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-polygon.md) non-null object design

The outline of this PCB.

#### `DesPcb.pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object design

The list of all part connection targets in this PCB.

#### `DesPcb.size` · [`DesSize2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size-2-d.md) non-null object design

The dimensions of the PCB outline.

#### `DesPcb.tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object design

The list of all conductor segments in this PCB.

##### `DesPcb.tracks.where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input design

#### `DesPcb.vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object design

The list of all multiple layer connections in this PCB.
