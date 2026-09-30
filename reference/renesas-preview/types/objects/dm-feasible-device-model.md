---
title: "DmFeasibleDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-feasible-device-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFeasibleDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A device without concrete peripherals and ports — enough to drive the matched-parts list and search results.

### Member Of

[`DmResolverFeasibilityResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-result.md) object

```graphql
type DmFeasibleDeviceModel {
  board: DmDeviceBoard
  deviceMpn: String!
  familyPart: DmFamilyPart
}
```

### Fields

#### `DmFeasibleDeviceModel.board` · [`DmDeviceBoard`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-board.md) object renesas-preview

Device board evaluated for this candidate, with configuration-compatibility. Null when the family has no board variant or the DevicesOnly strategy was used.

#### `DmFeasibleDeviceModel.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device part number.

#### `DmFeasibleDeviceModel.familyPart` · [`DmFamilyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) object renesas-preview

Family part details for the device (manufacturer, partial MPN, part-number details).
