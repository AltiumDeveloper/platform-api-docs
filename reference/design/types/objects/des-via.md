---
title: "DesVia"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesVia

PCB design via information.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesVia {
  beginLayer: DesLayer
  endLayer: DesLayer
  holeDiameter: DesSize!
  layer: DesLayer
  name: String
  net: DesNet
  padDiameter: DesSize!
  position: DesPosition2D!
  shape: DesPrimitiveShape
}
```

### Fields

#### `DesVia.beginLayer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

Layer information about the via start point.

#### `DesVia.endLayer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

Positional information about the via end point.

#### `DesVia.holeDiameter` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object design

Via hole diameter.

#### `DesVia.layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

Layer associated with via.

#### `DesVia.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of via.

#### `DesVia.net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object design

Net associated with via.

#### `DesVia.padDiameter` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object design

Via pad diameter.

#### `DesVia.position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

Positional information about the via.

#### `DesVia.shape` · [`DesPrimitiveShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-primitive-shape.md) enum design

Via shape.
