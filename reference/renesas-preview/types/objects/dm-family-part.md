---
title: "DmFamilyPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFamilyPart

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a single device family part variant.

### Member Of

[`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object · [`DmFamilyPartModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part-model.md) object · [`DmFeasibleDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-feasible-device-model.md) object · [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmFamilyPart {
  concrete: Boolean!
  description: String!
  deviceFamily: String!
  display: String!
  friendlyPartialMpn: String!
  level: Int!
  manufacturer: String!
  mcuPartDetails: DmMcuPartNumberModel
  partialMpn: String!
  raPartDetails: DmRaPartNumberModel @deprecated
  vendor: String!
}
```

### Fields

#### `DmFamilyPart.concrete` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this part variant is a concrete (fully specified) part.

#### `DmFamilyPart.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Descriptive text explaining the part variant.

#### `DmFamilyPart.deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Stable family key (e.g. "RA", "RAFW", "RX"), derived from the backing device's platform. Matches DmDeviceFamily.key and deviceFamilyKey. Empty when the platform is unknown (e.g. a non-concrete grouping node with no device).

#### `DmFamilyPart.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Formatted display string for the part variant.

#### `DmFamilyPart.friendlyPartialMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Human-friendly display of the partial MPN.

#### `DmFamilyPart.level` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Hierarchy level of the part within the family.

#### `DmFamilyPart.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer or vendor associated with the part.

#### `DmFamilyPart.mcuPartDetails` · [`DmMcuPartNumberModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mcu-part-number-model.md) object renesas-preview

MCU part number details parsed into structured properties.

#### `DmFamilyPart.partialMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Partial manufacturer part number pattern identifying a family subset.

#### `DmFamilyPart.vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Silicon vendor, e.g. "Renesas", derived from the backing device's platform. Empty when the platform is unknown.

#### Deprecated

#### `DmFamilyPart.raPartDetails` · [`DmRaPartNumberModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-ra-part-number-model.md) **DEPRECATED** object renesas-preview

> **Deprecated:** Use mcuPartDetails instead.

Deprecated. RA part number details; use mcuPartDetails.
