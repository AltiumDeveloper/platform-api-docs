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

#### `beginLayer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

Layer information about the via start point.

#### `endLayer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

Positional information about the via end point.

#### `holeDiameter` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object

Via hole diameter.

#### `layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

Layer associated with via.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of via.

#### `net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object

Net associated with via.

#### `padDiameter` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object

Via pad diameter.

#### `position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

Positional information about the via.

#### `shape` · [`DesPrimitiveShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-primitive-shape.md) enum

Via shape.
