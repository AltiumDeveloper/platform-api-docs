---
title: "DmMcuPartNumberModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mcu-part-number-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmMcuPartNumberModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

MCU part number details parsed into structured properties.

### Member Of

[`DmFamilyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) object

```graphql
type DmMcuPartNumberModel {
  application: String!
  device: String!
  display: String!
  family: String!
  featureSet: String!
  flashMemorySizeKB: Int!
  groupNumber: String!
  isArrayPackage: Boolean!
  onChipMemoryCode: String!
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

#### `DmMcuPartNumberModel.application` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Application category (e.g., Analog, Display, LowPower).

#### `DmMcuPartNumberModel.device` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device type derived from the part number.

#### `DmMcuPartNumberModel.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Formatted display summary of the part details.

#### `DmMcuPartNumberModel.family` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device family derived from the part number.

#### `DmMcuPartNumberModel.featureSet` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Feature set indicator for the device.

#### `DmMcuPartNumberModel.flashMemorySizeKB` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

On-chip flash memory size in kilobytes. Zero for SiP/Jacketed wireless parts where the position-8 character does not encode a Flash size; see onChipMemoryCode.

#### `DmMcuPartNumberModel.groupNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Group identifier within the family.

#### `DmMcuPartNumberModel.isArrayPackage` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True when the package uses a two-dimensional array/grid pin layout with coordinate-named pins (BGA, LGA, WLCSP, and A-QFN) rather than a single perimeter row (standard QFN, LQFP, etc.). Lets the Device Explorer pick the correct package icon for array variants such as A-QFN.

#### `DmMcuPartNumberModel.onChipMemoryCode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Raw position-8 character from the part number, retained so SiP/Jacketed wireless parts (where flashMemorySizeKB is 0) still surface the memory-tier code.

#### `DmMcuPartNumberModel.package` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Package type (e.g., LQFP, BGA, QFN).

#### `DmMcuPartNumberModel.packing` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Packing type (e.g., Tray, TapeAndReel, FullCarton, Unknown).

#### `DmMcuPartNumberModel.partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Full part number string.

#### `DmMcuPartNumberModel.performance` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Performance tier (e.g., RA0, RA2, RA4, RA6, RA8).

#### `DmMcuPartNumberModel.pinCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Total number of pins for the package.

#### `DmMcuPartNumberModel.pitchMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Pin pitch in millimeters.

#### `DmMcuPartNumberModel.qualityGrade` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Quality grade (e.g., Industrial, Consumer).

#### `DmMcuPartNumberModel.romCode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ROM code segment (empty when not present in the part number).

#### `DmMcuPartNumberModel.temperatureRange` · [`DmTemperatureRange`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-temperature-range.md) object renesas-preview

Supported operating temperature range.

#### `DmMcuPartNumberModel.xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Package X dimension in millimeters.

#### `DmMcuPartNumberModel.yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Package Y dimension in millimeters.
