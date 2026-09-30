---
title: "DmExecuteDeviceEvaluationFromConfigurationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-from-configuration-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmExecuteDeviceEvaluationFromConfigurationInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmExecuteDeviceEvaluationFromConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-from-configuration.md) mutation

```graphql
input DmExecuteDeviceEvaluationFromConfigurationInput {
  fileId: String!
  onlyFeasible: Boolean
  sessionId: String!
}
```

### Fields

#### `DmExecuteDeviceEvaluationFromConfigurationInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmExecuteDeviceEvaluationFromConfigurationInput.onlyFeasible` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `DmExecuteDeviceEvaluationFromConfigurationInput.sessionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
