---
title: "DmResolverSummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmResolverSummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Summary of all resolver runs including per-device results.

### Member Of

[`DmEsdResolverResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-esd-resolver-result.md) object · [`DmExecuteDeviceEvaluationByMpnPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-by-mpn-payload.md) object · [`DmExecuteDeviceEvaluationFromConfigurationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-from-configuration-payload.md) object · [`DmExecuteDeviceEvaluationFromESDPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-from-esdpayload.md) object · [`DmExecuteDeviceEvaluationFromXmlPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-from-xml-payload.md) object · [`DmExecuteDeviceEvaluationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-payload.md) object

```graphql
type DmResolverSummary {
  percentResolvedSuccess: String!
  requiredPeripherals: [DmRequestedPeripheral!]!
  results: [DmResolverResult!]!
}
```

### Fields

#### `percentResolvedSuccess` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Percentage of resolver results that produced a feasible or optimal solution (two decimal places).

#### `requiredPeripherals` · [`[DmRequestedPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral.md) non-null object

Aggregated required peripheral counts across all resolver runs.

#### `results` · [`[DmResolverResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) non-null object

List of resolver results produced for devices.
