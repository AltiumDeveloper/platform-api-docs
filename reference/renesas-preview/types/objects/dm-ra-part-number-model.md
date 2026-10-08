---
title: "DmRaPartNumberModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-ra-part-number-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmRaPartNumberModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Deprecated alias of DmMcuPartNumberModel, retained for backward compatibility. Use DmMcuPartNumberModel via the mcuPartDetails field.

### Member Of

[`DmFamilyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) object

```graphql
type DmRaPartNumberModel {
  application: String!
  device: String!
  display: String!
  family: String!
  featureSet: String!
  flashMemorySizeKB: Int!
  groupNumber: String!
  isArrayPackage: Boolean!
  package: String!
  packing: String!
  partNumber: String!
  performance: String!
  pinCount: Int!
  pitchMm: Decimal!
  qualityGrade: String!
  romCode: String!
  temperatureRange: DmTemperatureRange
  xMm: Decimal!
  yMm: Decimal!
}
```

### Fields

#### `application` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Application category (e.g., Analog, Display, LowPower).

#### `device` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Device type derived from the part number.

#### `display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Formatted display summary of the part details.

#### `family` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Device family derived from the part number.

#### `featureSet` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Feature set indicator for the device.

#### `flashMemorySizeKB` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

On-chip flash memory size in kilobytes.

#### `groupNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Group identifier within the family.

#### `isArrayPackage` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True when the package uses a two-dimensional array/grid pin layout with coordinate-named pins (BGA, LGA, WLCSP, and A-QFN) rather than a single perimeter row (standard QFN, LQFP, etc.). Lets the Device Explorer pick the correct package icon for array variants such as A-QFN.

#### `package` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Package type (e.g., LQFP, BGA, QFN).

#### `packing` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Packing type (e.g., Tray, TapeAndReel, FullCarton, Unknown).

#### `partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Full part number string.

#### `performance` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Performance tier (e.g., RA0, RA2, RA4, RA6, RA8).

#### `pinCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of pins for the package.

#### `pitchMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Pin pitch in millimeters.

#### `qualityGrade` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Quality grade (e.g., Industrial, Consumer).

#### `romCode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ROM code segment (empty when not present in the part number).

#### `temperatureRange` · [`DmTemperatureRange`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-temperature-range.md) object

Supported operating temperature range.

#### `xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Package X dimension in millimeters.

#### `yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Package Y dimension in millimeters.
