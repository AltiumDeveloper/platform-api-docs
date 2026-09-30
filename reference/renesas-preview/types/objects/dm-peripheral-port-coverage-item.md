---
title: "DmPeripheralPortCoverageItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-item"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralPortCoverageItem

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`DmPeripheralPortCoverageReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-report.md) object

```graphql
type DmPeripheralPortCoverageItem {
  functionName: String!
  modeName: String
  opModeId: String
  peripheralInstanceName: String!
  peripheralName: String
  portName: String!
}
```

### Fields

#### `DmPeripheralPortCoverageItem.functionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmPeripheralPortCoverageItem.modeName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `DmPeripheralPortCoverageItem.opModeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `DmPeripheralPortCoverageItem.peripheralInstanceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmPeripheralPortCoverageItem.peripheralName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `DmPeripheralPortCoverageItem.portName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
