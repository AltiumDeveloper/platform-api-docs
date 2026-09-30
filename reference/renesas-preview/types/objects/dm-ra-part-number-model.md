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

#### `DmRaPartNumberModel.application` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Application category (e.g., Analog, Display, LowPower).

#### `DmRaPartNumberModel.device` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device type derived from the part number.

#### `DmRaPartNumberModel.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Formatted display summary of the part details.

#### `DmRaPartNumberModel.family` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device family derived from the part number.

#### `DmRaPartNumberModel.featureSet` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Feature set indicator for the device.

#### `DmRaPartNumberModel.flashMemorySizeKB` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

On-chip flash memory size in kilobytes.

#### `DmRaPartNumberModel.groupNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Group identifier within the family.

#### `DmRaPartNumberModel.isArrayPackage` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True when the package uses a two-dimensional array/grid pin layout with coordinate-named pins (BGA, LGA, WLCSP, and A-QFN) rather than a single perimeter row (standard QFN, LQFP, etc.). Lets the Device Explorer pick the correct package icon for array variants such as A-QFN.

#### `DmRaPartNumberModel.package` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Package type (e.g., LQFP, BGA, QFN).

#### `DmRaPartNumberModel.packing` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Packing type (e.g., Tray, TapeAndReel, FullCarton, Unknown).

#### `DmRaPartNumberModel.partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Full part number string.

#### `DmRaPartNumberModel.performance` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Performance tier (e.g., RA0, RA2, RA4, RA6, RA8).

#### `DmRaPartNumberModel.pinCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Total number of pins for the package.

#### `DmRaPartNumberModel.pitchMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Pin pitch in millimeters.

#### `DmRaPartNumberModel.qualityGrade` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Quality grade (e.g., Industrial, Consumer).

#### `DmRaPartNumberModel.romCode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ROM code segment (empty when not present in the part number).

#### `DmRaPartNumberModel.temperatureRange` · [`DmTemperatureRange`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-temperature-range.md) object renesas-preview

Supported operating temperature range.

#### `DmRaPartNumberModel.xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Package X dimension in millimeters.

#### `DmRaPartNumberModel.yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Package Y dimension in millimeters.
