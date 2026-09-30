---
title: "DesStackup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stackup"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesStackup

Layer stackup properties and definition.

### Member Of

[`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesStackup {
  layerTypes: [DesLayerType!]!
  roughnessFactorRF: String!
  roughnessFactorSR: String!
  roughnessType: String!
  stacks: [DesStack!]!
  stackupType: String!
}
```

### Fields

#### `DesStackup.layerTypes` · [`[DesLayerType!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-layer-type.md) non-null enum design

Layer types in stackup.

#### `DesStackup.roughnessFactorRF` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Roughness factor, characterizing the expected maximal increase in conductor losses due to the roughness effect. Default is 2.

#### `DesStackup.roughnessFactorSR` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Value of the surface roughness.

#### `DesStackup.roughnessType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Shows roughness of conductive layers.

#### `DesStackup.stacks` · [`[DesStack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stack.md) non-null object design

Substacks that make a stackup.

#### `DesStackup.stackupType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Type of stackup.
