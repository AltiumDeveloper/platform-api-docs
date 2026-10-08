---
title: "DesColor"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-color"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesColor

Information in HEX and RGB for the color of an item.

### Member Of

[`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object

```graphql
type DesColor {
  hexString: String!
  rgbString: String!
}
```

### Fields

#### `hexString` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Color value (HEX).

#### `rgbString` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Color value (RGB).
