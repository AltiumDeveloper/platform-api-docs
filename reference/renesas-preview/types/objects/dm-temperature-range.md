---
title: "DmTemperatureRange"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-temperature-range"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmTemperatureRange

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Operating temperature range with units and measurement reference.

### Member Of

[`DmMcuPartNumberModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mcu-part-number-model.md) object · [`DmRaPartNumberModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-ra-part-number-model.md) object

```graphql
type DmTemperatureRange {
  display: String!
  max: Int!
  min: Int!
  tempType: String!
}
```

### Fields

#### `DmTemperatureRange.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display representation of the temperature range.

#### `DmTemperatureRange.max` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Maximum temperature in degrees Celsius.

#### `DmTemperatureRange.min` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Minimum temperature in degrees Celsius.

#### `DmTemperatureRange.tempType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Temperature measurement reference (Ambient or Junction).
