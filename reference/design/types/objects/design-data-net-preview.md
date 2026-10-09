---
title: "DesignDataNet_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataNet\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a net (electrical connection) in the design.

### Member Of

[`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

```graphql
type DesignDataNet_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  calculatedNetName: String
  color: Int!
  diffPair: DesignDataDifferentialPair_Preview
  lines: [DesignDataLine_Preview!]!
  location: DesignDataLocation_Preview
  name: String
  netClasses: [String!]!
  netItems: [DesignDataNetItem_Preview!]!
  parameters: [DesignDataNetParameter_Preview!]!
  pins: [DesignDataPin_Preview!]!
  rules: [DesignDataRule_Preview!]!
}
```

### Fields

#### `boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object

The bounding rectangle of the net.

#### `calculatedNetName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The calculated net name.

#### `color` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The color value associated with the net.

#### `diffPair` · [`DesignDataDifferentialPair_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-differential-pair-preview.md) object

Indicates whether the net is part of a differential pair.

#### `lines` · [`[DesignDataLine_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-line-preview.md) non-null object

The lines that form the net.

#### `location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object

The location of the net.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of the net.

#### `netClasses` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The class of the net.

#### `netItems` · [`[DesignDataNetItem_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-item-preview.md) non-null object

The net items belonging to the net.

#### `parameters` · [`[DesignDataNetParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-parameter-preview.md) non-null object

The parameters associated with the net.

#### `pins` · [`[DesignDataPin_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) non-null object

The pins connected to the net.

#### `rules` · [`[DesignDataRule_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rule-preview.md) non-null object

The rules associated with the net.
