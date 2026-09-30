---
title: "DmExecuteDeviceEvaluationByFamilyInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-family-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmExecuteDeviceEvaluationByFamilyInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmExecuteDeviceEvaluationByFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-by-family.md) mutation

```graphql
input DmExecuteDeviceEvaluationByFamilyInput {
  deviceFamily: String!
  evaluationStrategy: DmModelEvaluationStrategy
  includeDiagnostics: Boolean
  payload: [DmRequiredPeripheralPayloadInput!]!
  vendor: String!
}
```

### Fields

#### `DmExecuteDeviceEvaluationByFamilyInput.deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmExecuteDeviceEvaluationByFamilyInput.evaluationStrategy` · [`DmModelEvaluationStrategy`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/dm-model-evaluation-strategy.md) enum renesas-preview

#### `DmExecuteDeviceEvaluationByFamilyInput.includeDiagnostics` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `DmExecuteDeviceEvaluationByFamilyInput.payload` · [`[DmRequiredPeripheralPayloadInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-required-peripheral-payload-input.md) non-null input renesas-preview

#### `DmExecuteDeviceEvaluationByFamilyInput.vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
