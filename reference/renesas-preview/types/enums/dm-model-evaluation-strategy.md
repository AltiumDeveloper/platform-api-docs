---
title: "DmModelEvaluationStrategy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/dm-model-evaluation-strategy"
bounded_context: "Renesas (preview)"
kind: "enums"
experimental: true
deprecated: false
---

# DmModelEvaluationStrategy

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Controls how device models are evaluated with respect to devices and boards, including preferred and fallback behaviors.

### Member Of

[`DmExecuteDeviceEvaluationByFamilyInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-family-input.md) input · [`DmExecuteDeviceEvaluationByMpnInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-by-mpn-input.md) input · [`DmExecuteDeviceEvaluationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-input.md) input

```graphql
enum DmModelEvaluationStrategy {
  DEVICES_ONLY
  DEVICES_PREFER_BOARD_COMPATIBLE
}
```

### Values

#### `DEVICES_ONLY`

Evaluate only devices. Boards are not considered.

#### `DEVICES_PREFER_BOARD_COMPATIBLE`

Evaluate devices, preferring configurations that are compatible with the specified board when possible (soft preference, not a hard constraint).
