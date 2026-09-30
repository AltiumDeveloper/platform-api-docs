---
title: "DesLayer"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesLayer

Information about a specific layer in the PCB.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object · [`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) object · [`DesStack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stack.md) object · [`DesTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) object · [`DesVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) object

```graphql
type DesLayer {
  copperArea: DesArea @deprecated
  copperRatio: Decimal @deprecated
  copperWeight: DesWeight
  dielectricConstant: Decimal
  layerProperties: [DesLayerProperty!]!
  layerType: DesLayerType!
  material: String
  name: String!
  nets: [DesNet!]!
  thickness: DesSize
}
```

### Fields

#### `DesLayer.copperWeight` · [`DesWeight`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-weight.md) object design

Layer copper weight.

#### `DesLayer.dielectricConstant` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar common

Layer dielectric constant.

#### `DesLayer.layerProperties` · [`[DesLayerProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer-property.md) non-null object design

Layer properties.

#### `DesLayer.layerType` · [`DesLayerType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-layer-type.md) non-null enum design

Layer type.

#### `DesLayer.material` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Layer material.

#### `DesLayer.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Layer name.

#### `DesLayer.nets` · [`[DesNet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) non-null object design

Layer nets.

#### `DesLayer.thickness` · [`DesSize`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) object design

Layer thickness.

#### Deprecated

#### `DesLayer.copperArea` · [`DesArea`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-area.md) **DEPRECATED** object design

> **Deprecated:** No longer used - always returns null.

#### `DesLayer.copperRatio` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) **DEPRECATED** scalar common

> **Deprecated:** No longer used - always returns null.
