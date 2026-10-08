---
title: "DmInterfaceModelSupport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-model-support"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInterfaceModelSupport

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Support details for an interface across a set of models (devices or boards).

### Member Of

[`DmInterfaceSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-summary.md) object

```graphql
type DmInterfaceModelSupport {
  statistics: DmInstanceStatistics!
  supported(
    deviceMpn: String
    family: String
  ): [DmModelSupportEntry!]!
  supportedCount: Int!
  supportedPercentage: Float!
  unsupported(
    deviceMpn: String
    family: String
  ): [DmModelSupportEntry!]!
}
```

### Fields

#### `statistics` · [`DmInstanceStatistics!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-statistics.md) non-null object

Statistics on instance counts across supported models.

#### `supported` · [`[DmModelSupportEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry.md) non-null object

Models that support this interface. Supports filtering by deviceMpn and/or family.

##### `deviceMpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

##### `family` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `supportedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of models that support this interface.

#### `supportedPercentage` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Percentage of models that support this interface.

#### `unsupported` · [`[DmModelSupportEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry.md) non-null object

Models that do not support this interface. Supports filtering by deviceMpn and/or family.

##### `deviceMpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

##### `family` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
