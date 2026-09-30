---
title: "DmRequestedPeripheral"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmRequestedPeripheral

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Requested peripheral entry with its required count.

### Member Of

[`DmResolverFeasibilitySummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-summary.md) object · [`DmResolverResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) object · [`DmResolverSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-summary.md) object · [`DmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-model.md) object

```graphql
type DmRequestedPeripheral {
  count: Int!
  name: String!
}
```

### Fields

#### `DmRequestedPeripheral.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of instances requested for this peripheral.

#### `DmRequestedPeripheral.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Peripheral type or identifier requested (generic or device-specific).
