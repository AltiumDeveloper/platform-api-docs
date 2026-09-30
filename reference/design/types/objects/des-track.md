---
title: "DesTrack"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesTrack

PCB design track information.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesTrack {
  begin: DesPosition2D!
  end: DesPosition2D!
  layer: DesLayer
  net: DesNet
  width: DesSize!
}
```

### Fields

#### `DesTrack.begin` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

Positional information about the track start point.

#### `DesTrack.end` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

Positional information about the track end point.

#### `DesTrack.layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

Layer associated with the track.

#### `DesTrack.net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object design

Net associated with the track.

#### `DesTrack.width` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object design

Width of track.
