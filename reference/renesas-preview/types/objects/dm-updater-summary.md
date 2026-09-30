---
title: "DmUpdaterSummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-updater-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmUpdaterSummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Summary of device model updater run.

### Member Of

[`DmUpdateDeviceFromSdmPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-update-device-from-sdm-payload.md) object

```graphql
type DmUpdaterSummary {
  peripheralChanges: DmPeripheralChanges!
  result: DmResolverResult!
}
```

### Fields

#### `DmUpdaterSummary.peripheralChanges` · [`DmPeripheralChanges!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-changes.md) non-null object renesas-preview

Added, removed, and modified peripheral instances between incoming SDM and resolved model.

#### `DmUpdaterSummary.result` · [`DmResolverResult!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) non-null object renesas-preview

Resolver output containing feasibility and selected peripheral instance assignments.
