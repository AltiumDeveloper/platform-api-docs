---
title: "DmExecuteDeviceEvaluationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmExecuteDeviceEvaluationInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmExecuteDeviceEvaluation`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation.md) mutation

```graphql
input DmExecuteDeviceEvaluationInput {
  evaluationStrategy: DmModelEvaluationStrategy
  includeDiagnostics: Boolean
  onlyFeasible: Boolean
  optionalDeviceMpn: String
  payload: [DmRequiredPeripheralPayloadInput!]!
  sessionId: String!
  strictMode: Boolean
}
```

### Fields

#### `evaluationStrategy` · [`DmModelEvaluationStrategy`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/dm-model-evaluation-strategy.md) enum

#### `includeDiagnostics` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

#### `onlyFeasible` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

#### `optionalDeviceMpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `payload` · [`[DmRequiredPeripheralPayloadInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-required-peripheral-payload-input.md) non-null input

#### `sessionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `strictMode` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar
