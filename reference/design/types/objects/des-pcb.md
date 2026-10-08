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

#### `area` · [`DesArea!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-area.md) non-null object

The total area contained by the PCB outline.

#### `commentThreads` · [`[DesCommentThread!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) non-null object Collaboration

The list of all comment threads related to this PCB.

#### `designItems` · [`DesDesignItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-connection.md) object

PCB items, instances of [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md), returned by pages.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

\*\*DEPRECATED\*\* Use `where: {designator: {in: ...}}`.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input

#### `documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this PCB.

#### `documentName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The document file name.

#### `layerStack` · [`DesStackup`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stackup.md) object

The details of the layer structure of this PCB.

#### `mesh3D` · [`DesMesh3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d.md) object

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `nets` · [`[DesNet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) non-null object

The list of all electrically connected regions in this PCB.

##### `names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

An optional array of names to search.

#### `origin` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

The location of the coordinate system origin.

#### `outline` · [`DesPolygon!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-polygon.md) non-null object

The outline of this PCB.

#### `pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object

The list of all part connection targets in this PCB.

#### `size` · [`DesSize2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size-2-d.md) non-null object

The dimensions of the PCB outline.

#### `tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object

The list of all conductor segments in this PCB.

##### `where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input

#### `vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object

The list of all multiple layer connections in this PCB.
