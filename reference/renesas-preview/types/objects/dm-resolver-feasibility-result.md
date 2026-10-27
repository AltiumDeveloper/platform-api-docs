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

#### `boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

An optional board name associated with this result.

#### `constraintModel` · [`DmConstraintModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-constraint-model.md) object

Snapshot of the CP-SAT constraint model built before solving, including variables, constraint groups, and the objective. Populated only when the evaluation runs with includeDiagnostics=true; null otherwise.

#### `deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Legacy group/series prefix (e.g. "R7FA8"). Prefer deviceFamilyKey for the true family.

#### `deviceFamilyKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Stable family key of the device ("RA", "RAFW", "RX").

#### `deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer part number of the candidate device.

#### `errors` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Errors encountered during solving.

#### `feasibleModel` · [`DmFeasibleDeviceModel!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-feasible-device-model.md) non-null object

Lean device model (MPN + family part details) without configured ports/peripherals.

#### `isFeasible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether a feasible solution exists for this device.

#### `logs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Log lines collected during solving. Populated only when the evaluation runs with includeDiagnostics=true.

#### `solverStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Final status returned by the constraint solver.

#### `vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Silicon vendor of the device, e.g. "Renesas".

#### `wallTimeSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Wall-clock time spent solving (seconds).

#### `warnings` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Warnings emitted during solving or post-processing.
