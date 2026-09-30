---
title: "DmDeviceFamily"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-family"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmDeviceFamily

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A supported device family (e.g. RA, RX) with display metadata and total device count.

### Returned By

[`dmDeviceFamilies`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-device-families.md) query

```graphql
type DmDeviceFamily {
  aliases: [String!]!
  capabilities: [DmFamilyCapability!]!
  description: String!
  key: String!
  label: String!
  priority: Int!
  shortLabel: String!
  totalDevices: Int!
  vendor: String!
}
```

### Fields

#### `DmDeviceFamily.aliases` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Search aliases used to recognise this family from user input.

#### `DmDeviceFamily.capabilities` · [`[DmFamilyCapability!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-capability.md) non-null object renesas-preview

Extensible key-value list of family feature flags (e.g. bspGeneration). Absent capabilities should be treated as false by callers.

#### `DmDeviceFamily.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

One-line human description of the family.

#### `DmDeviceFamily.key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Stable string key for the family (e.g. "RA", "RAFW", "RX"). Use this as the deviceFamily input to evaluation.

#### `DmDeviceFamily.label` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Full display label, e.g. "Renesas RA".

#### `DmDeviceFamily.priority` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Selection/fallback order. Lower is tried first / is the default family.

#### `DmDeviceFamily.shortLabel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Compact display label, e.g. "RA".

#### `DmDeviceFamily.totalDevices` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of devices of this family currently loaded in the catalog.

#### `DmDeviceFamily.vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Silicon vendor, e.g. "Renesas".
