---
title: "DmPeripheralPortCoverageReport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-report"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralPortCoverageReport

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`DmFullStackModelReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-model-report.md) object

```graphql
type DmPeripheralPortCoverageReport {
  coveragePercent: Float!
  covered: [DmPeripheralPortCoverageItem!]!
  notCovered: [DmPeripheralPortCoverageItem!]!
  peripheralName: String!
  total: Int!
}
```

### Fields

#### `DmPeripheralPortCoverageReport.coveragePercent` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

#### `DmPeripheralPortCoverageReport.covered` · [`[DmPeripheralPortCoverageItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-item.md) non-null object renesas-preview

#### `DmPeripheralPortCoverageReport.notCovered` · [`[DmPeripheralPortCoverageItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-item.md) non-null object renesas-preview

#### `DmPeripheralPortCoverageReport.peripheralName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmPeripheralPortCoverageReport.total` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common
