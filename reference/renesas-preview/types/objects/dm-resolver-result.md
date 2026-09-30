---
title: "DmResolverResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmResolverResult

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Resolver outcome and details for a single device.

### Member Of

[`DmResolverSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-summary.md) object · [`DmUpdaterSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-updater-summary.md) object

```graphql
type DmResolverResult {
  boardName: String
  completedAt: DateTime!
  completedOpModeGroups: [String!]! @deprecated
  configuredModel: DmDeviceModelAsConfigured
  constraintModel: DmConstraintModel
  deviceFamily: String!
  deviceFamilyKey: String!
  deviceMpn: String!
  durationSeconds: Float!
  errors: [String!]!
  isFeasible: Boolean!
  isOptimal: Boolean!
  logs: [String!]!
  objectiveValue: Float!
  portPresets: [DmPortPreset!]!
  requestedPeripherals: [DmRequestedPeripheral!]!
  requestedTotalCount: Int!
  selections: [DmInstanceSelection!]!
  solverStatus: String!
  startedAt: DateTime!
  vendor: String!
  wallTimeSeconds: Float!
  warnings: [String!]!
}
```

### Fields

#### `DmResolverResult.boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

An optional board name associated with this result.

#### `DmResolverResult.completedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

UTC timestamp when solving completed.

#### `DmResolverResult.configuredModel` · [`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object renesas-preview

Configured device model produced by the solution, if available.

#### `DmResolverResult.constraintModel` · [`DmConstraintModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-constraint-model.md) object renesas-preview

Snapshot of the CP-SAT constraint model built before solving, including variables, constraint groups, and the objective. Null when the model was not captured.

#### `DmResolverResult.deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Legacy group/series prefix (e.g. "R7FA8"). Prefer deviceFamilyKey for the true family.

#### `DmResolverResult.deviceFamilyKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Stable family key of the device ("RA", "RAFW", "RX").

#### `DmResolverResult.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer part number associated with this result.

#### `DmResolverResult.durationSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Duration between start and completion in seconds.

#### `DmResolverResult.errors` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Errors encountered during solving.

#### `DmResolverResult.isFeasible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether a feasible solution was found.

#### `DmResolverResult.isOptimal` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the found solution is proven optimal.

#### `DmResolverResult.logs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Log lines collected during solving.

#### `DmResolverResult.objectiveValue` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Objective value reported by the solver (if applicable).

#### `DmResolverResult.portPresets` · [`[DmPortPreset!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-preset.md) non-null object renesas-preview

All ports on this board that carry a preset function preference, regardless of solver selection.

#### `DmResolverResult.requestedPeripherals` · [`[DmRequestedPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral.md) non-null object renesas-preview

Requested peripheral counts used as input to the solver.

#### `DmResolverResult.requestedTotalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Total number of requested peripherals (sum of all requested counts).

#### `DmResolverResult.selections` · [`[DmInstanceSelection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-selection.md) non-null object renesas-preview

Selected peripheral instances with mode and pin mappings.

#### `DmResolverResult.solverStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Final status returned by the constraint solver.

#### `DmResolverResult.startedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

UTC timestamp when solving started.

#### `DmResolverResult.vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Silicon vendor of the device, e.g. "Renesas".

#### `DmResolverResult.wallTimeSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Wall-clock time spent solving (seconds).

#### `DmResolverResult.warnings` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Warnings emitted during solving or post-processing.

#### Deprecated

#### `DmResolverResult.completedOpModeGroups` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** No longer populated. Use 'selections' instead to inspect completed candidate instances.

Operation mode groups completed by the solution.
