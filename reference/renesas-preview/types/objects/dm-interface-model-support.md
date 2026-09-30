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

#### `DmInterfaceModelSupport.statistics` · [`DmInstanceStatistics!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-statistics.md) non-null object renesas-preview

Statistics on instance counts across supported models.

#### `DmInterfaceModelSupport.supported` · [`[DmModelSupportEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry.md) non-null object renesas-preview

Models that support this interface. Supports filtering by deviceMpn and/or family.

##### `DmInterfaceModelSupport.supported.deviceMpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

##### `DmInterfaceModelSupport.supported.family` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `DmInterfaceModelSupport.supportedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of models that support this interface.

#### `DmInterfaceModelSupport.supportedPercentage` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Percentage of models that support this interface.

#### `DmInterfaceModelSupport.unsupported` · [`[DmModelSupportEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry.md) non-null object renesas-preview

Models that do not support this interface. Supports filtering by deviceMpn and/or family.

##### `DmInterfaceModelSupport.unsupported.deviceMpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

##### `DmInterfaceModelSupport.unsupported.family` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
