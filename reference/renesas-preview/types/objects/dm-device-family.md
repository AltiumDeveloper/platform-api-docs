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

#### `aliases` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Search aliases used to recognise this family from user input.

#### `capabilities` · [`[DmFamilyCapability!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-capability.md) non-null object

Extensible key-value list of family feature flags (e.g. bspGeneration). Absent capabilities should be treated as false by callers.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

One-line human description of the family.

#### `key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Stable string key for the family (e.g. "RA", "RAFW", "RX"). Use this as the deviceFamily input to evaluation.

#### `label` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Full display label, e.g. "Renesas RA".

#### `priority` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Selection/fallback order. Lower is tried first / is the default family.

#### `shortLabel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Compact display label, e.g. "RA".

#### `totalDevices` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of devices of this family currently loaded in the catalog.

#### `vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Silicon vendor, e.g. "Renesas".
