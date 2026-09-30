---
title: "DmResolverFeasibilitySummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmResolverFeasibilitySummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Fast, family-scoped feasibility summary. Carries a lean feasibleModel (no configured ports/peripherals) for each candidate device, enough to drive the matched-parts list and search results.

### Member Of

[`DmExecuteDeviceEvaluationByFamilyPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-evaluation-by-family-payload.md) object

```graphql
type DmResolverFeasibilitySummary {
  percentResolvedSuccess: String!
  requiredPeripherals: [DmRequestedPeripheral!]!
  results: [DmResolverFeasibilityResult!]!
}
```

### Fields

#### `DmResolverFeasibilitySummary.percentResolvedSuccess` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Percentage of candidates that are feasible (two decimal places).

#### `DmResolverFeasibilitySummary.requiredPeripherals` · [`[DmRequestedPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral.md) non-null object renesas-preview

Aggregated required peripheral counts used as input.

#### `DmResolverFeasibilitySummary.results` · [`[DmResolverFeasibilityResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-result.md) non-null object renesas-preview

Per-device feasibility results for the requested family.
