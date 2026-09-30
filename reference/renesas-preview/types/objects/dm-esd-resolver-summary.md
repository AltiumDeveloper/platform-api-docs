---
title: "DmEsdResolverSummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-esd-resolver-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmEsdResolverSummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Summary of running device model evaluation for an ESD document. This includes all found MCUs with per-device results. Each MCU has associated session ID that can be used to retrieve the results at later time

### Member Of

[`DmExecuteDeviceEvaluationFromESDv2Payload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-from-esdv-2-payload.md) object

```graphql
type DmEsdResolverSummary {
  functionalBlocks: [DmEsdResolverResult!]!
}
```

### Fields

#### `DmEsdResolverSummary.functionalBlocks` · [`[DmEsdResolverResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-esd-resolver-result.md) non-null object renesas-preview

The results for functional blocks found in the ESD document.
