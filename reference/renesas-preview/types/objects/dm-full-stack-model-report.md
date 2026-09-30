---
title: "DmFullStackModelReport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-model-report"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFullStackModelReport

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`dmFullStackDeviceModelReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-full-stack-device-model-report.md) query · [`dmFullStackDeviceModelReportAllDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-full-stack-device-model-report-all-devices.md) query

```graphql
type DmFullStackModelReport {
  deviceMpn: String!
  reports: [DmPeripheralPortCoverageReport!]!
}
```

### Fields

#### `DmFullStackModelReport.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmFullStackModelReport.reports` · [`[DmPeripheralPortCoverageReport!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-port-coverage-report.md) non-null object renesas-preview
