---
title: "dmExecuteDeviceEvaluationByMpn"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-by-mpn"
bounded_context: "Renesas (preview)"
kind: "mutations"
experimental: true
deprecated: false
---

# dmExecuteDeviceEvaluationByMpn

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Evaluates required peripherals against a single, already-chosen device (by MPN) and returns the full configured model (concrete ports and peripherals).

```graphql
dmExecuteDeviceEvaluationByMpn(
  input: DmExecuteDeviceEvaluationByMpnInput!
): DmExecuteDeviceEvaluationByMpnPayload!
```

### Arguments

#### `dmExecuteDeviceEvaluationByMpn.input` · [`DmExecuteDeviceEvaluationByMpnInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-mpn-input.md) non-null input renesas-preview

### Type

#### [`DmExecuteDeviceEvaluationByMpnPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-by-mpn-payload.md) object renesas-preview **EXPERIMENTAL**
