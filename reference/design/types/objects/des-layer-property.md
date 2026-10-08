---
title: "DesLayerProperty"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer-property"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesLayerProperty

A property describing a layer.

### Member Of

[`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

```graphql
type DesLayerProperty {
  name: String!
  size: DesSize
  text: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Layer property name.

#### `size` · [`DesSize`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) object

Layer property size.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Layer property text.
