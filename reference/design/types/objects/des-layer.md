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

#### `copperWeight` · [`DesWeight`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-weight.md) object

Layer copper weight.

#### `dielectricConstant` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar

Layer dielectric constant.

#### `layerProperties` · [`[DesLayerProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer-property.md) non-null object

Layer properties.

#### `layerType` · [`DesLayerType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-layer-type.md) non-null enum

Layer type.

#### `material` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Layer material.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Layer name.

#### `nets` · [`[DesNet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) non-null object

Layer nets.

#### `thickness` · [`DesSize`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) object

Layer thickness.

#### Deprecated

#### `copperArea` · [`DesArea`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-area.md) **DEPRECATED** object

> **Deprecated:** No longer used - always returns null.

#### `copperRatio` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) **DEPRECATED** scalar

> **Deprecated:** No longer used - always returns null.
