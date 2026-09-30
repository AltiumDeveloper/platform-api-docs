---
title: "DesNet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesNet

Net information.

### Member Of

[`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object · [`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object · [`DesTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) object · [`DesVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) object

```graphql
type DesNet {
  cumulativeLength: DesSize!
  layers: [DesLayer!]!
  name: String!
  pads: [DesPad!]!
  tracks(
    where: DesTrackFilterInput
  ): [DesTrack!]!
  vias: [DesVia!]!
}
```

### Fields

#### `DesNet.cumulativeLength` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object design

Net cumulative length.

#### `DesNet.layers` · [`[DesLayer!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) non-null object design

The layers associated with this net.

#### `DesNet.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Net name.

#### `DesNet.pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object design

The pads associated with this net.

#### `DesNet.tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object design

The tracks associated with this net.

##### `DesNet.tracks.where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input design

#### `DesNet.vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object design

The vias associated with this net.
