---
title: "DmInterfaceSupportSummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-support-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInterfaceSupportSummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Summary of supported interfaces across all devices in the catalog.

### Returned By

[`dmInterfaceSupportSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-interface-support-summary.md) query

```graphql
type DmInterfaceSupportSummary {
  interfaces(
    interfaceType: String
  ): [DmInterfaceSummary!]!
  totalBoards: Int!
  totalDevices: Int!
}
```

### Fields

#### `interfaces` · [`[DmInterfaceSummary!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-summary.md) non-null object

List of supported generic interfaces with per-device support details. Optionally filter by interface type.

##### `interfaceType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `totalBoards` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of boards in the catalog.

#### `totalDevices` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of devices in the catalog.
