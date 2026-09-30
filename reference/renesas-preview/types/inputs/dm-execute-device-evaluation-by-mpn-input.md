---
title: "DmExecuteDeviceEvaluationByMpnInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-mpn-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmExecuteDeviceEvaluationByMpnInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmExecuteDeviceEvaluationByMpn`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-by-mpn.md) mutation

```graphql
input DmExecuteDeviceEvaluationByMpnInput {
  deviceMpn: String!
  evaluationStrategy: DmModelEvaluationStrategy
  includeDiagnostics: Boolean
  payload: [DmRequiredPeripheralPayloadInput!]!
}
```

### Fields

#### `DmExecuteDeviceEvaluationByMpnInput.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmExecuteDeviceEvaluationByMpnInput.evaluationStrategy` · [`DmModelEvaluationStrategy`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/dm-model-evaluation-strategy.md) enum renesas-preview

#### `DmExecuteDeviceEvaluationByMpnInput.includeDiagnostics` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `DmExecuteDeviceEvaluationByMpnInput.payload` · [`[DmRequiredPeripheralPayloadInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-required-peripheral-payload-input.md) non-null input renesas-preview
