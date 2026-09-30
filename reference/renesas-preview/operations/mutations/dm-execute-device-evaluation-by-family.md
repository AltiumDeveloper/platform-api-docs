---
title: "dmExecuteDeviceEvaluationByFamily"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-by-family"
bounded_context: "Renesas (preview)"
kind: "mutations"
experimental: true
deprecated: false
---

# dmExecuteDeviceEvaluationByFamily

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Fast, family-scoped feasibility evaluation. Returns candidate devices with feasibility and a lean feasibleModel (no configured ports/peripherals). An empty family yields an empty summary so callers can fall back to the next family.

```graphql
dmExecuteDeviceEvaluationByFamily(
  input: DmExecuteDeviceEvaluationByFamilyInput!
): DmExecuteDeviceEvaluationByFamilyPayload!
```

### Arguments

#### `dmExecuteDeviceEvaluationByFamily.input` · [`DmExecuteDeviceEvaluationByFamilyInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-family-input.md) non-null input renesas-preview

### Type

#### [`DmExecuteDeviceEvaluationByFamilyPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-by-family-payload.md) object renesas-preview **EXPERIMENTAL**
