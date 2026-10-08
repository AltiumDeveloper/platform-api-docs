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

#### `begin` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

Positional information about the track start point.

#### `end` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

Positional information about the track end point.

#### `layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

Layer associated with the track.

#### `net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object

Net associated with the track.

#### `width` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object

Width of track.
