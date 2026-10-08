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

#### `layerTypes` · [`[DesLayerType!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-layer-type.md) non-null enum

Layer types in stackup.

#### `roughnessFactorRF` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Roughness factor, characterizing the expected maximal increase in conductor losses due to the roughness effect. Default is 2.

#### `roughnessFactorSR` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Value of the surface roughness.

#### `roughnessType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Shows roughness of conductive layers.

#### `stacks` · [`[DesStack!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stack.md) non-null object

Substacks that make a stackup.

#### `stackupType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Type of stackup.
