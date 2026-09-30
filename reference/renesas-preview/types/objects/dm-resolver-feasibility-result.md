---
title: "DmResolverFeasibilityResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-result"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmResolverFeasibilityResult

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Feasibility outcome for a single candidate device (no full configuration).

### Member Of

[`DmResolverFeasibilitySummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-summary.md) object

```graphql
type DmResolverFeasibilityResult {
  boardName: String
  constraintModel: DmConstraintModel
  deviceFamily: String!
  deviceFamilyKey: String!
  deviceMpn: String!
  errors: [String!]!
  feasibleModel: DmFeasibleDeviceModel!
  isFeasible: Boolean!
  logs: [String!]!
  solverStatus: String!
  vendor: String!
  wallTimeSeconds: Float!
  warnings: [String!]!
}
```

### Fields

#### `DmResolverFeasibilityResult.boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

An optional board name associated with this result.

#### `DmResolverFeasibilityResult.constraintModel` · [`DmConstraintModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-constraint-model.md) object renesas-preview

Snapshot of the CP-SAT constraint model built before solving, including variables, constraint groups, and the objective. Populated only when the evaluation runs with includeDiagnostics=true; null otherwise.

#### `DmResolverFeasibilityResult.deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Legacy group/series prefix (e.g. "R7FA8"). Prefer deviceFamilyKey for the true family.

#### `DmResolverFeasibilityResult.deviceFamilyKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Stable family key of the device ("RA", "RAFW", "RX").

#### `DmResolverFeasibilityResult.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer part number of the candidate device.

#### `DmResolverFeasibilityResult.errors` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Errors encountered during solving.

#### `DmResolverFeasibilityResult.feasibleModel` · [`DmFeasibleDeviceModel!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-feasible-device-model.md) non-null object renesas-preview

Lean device model (MPN + family part details) without configured ports/peripherals.

#### `DmResolverFeasibilityResult.isFeasible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether a feasible solution exists for this device.

#### `DmResolverFeasibilityResult.logs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Log lines collected during solving. Populated only when the evaluation runs with includeDiagnostics=true.

#### `DmResolverFeasibilityResult.solverStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Final status returned by the constraint solver.

#### `DmResolverFeasibilityResult.vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Silicon vendor of the device, e.g. "Renesas".

#### `DmResolverFeasibilityResult.wallTimeSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Wall-clock time spent solving (seconds).

#### `DmResolverFeasibilityResult.warnings` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Warnings emitted during solving or post-processing.
