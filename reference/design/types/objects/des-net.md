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

#### `cumulativeLength` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object

Net cumulative length.

#### `layers` · [`[DesLayer!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) non-null object

The layers associated with this net.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Net name.

#### `pads` · [`[DesPad!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) non-null object

The pads associated with this net.

#### `tracks` · [`[DesTrack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) non-null object

The tracks associated with this net.

##### `where` · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input

#### `vias` · [`[DesVia!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) non-null object

The vias associated with this net.
