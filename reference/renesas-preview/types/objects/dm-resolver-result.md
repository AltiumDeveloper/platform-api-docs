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

#### `boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

An optional board name associated with this result.

#### `completedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

UTC timestamp when solving completed.

#### `configuredModel` · [`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object

Configured device model produced by the solution, if available.

#### `constraintModel` · [`DmConstraintModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-constraint-model.md) object

Snapshot of the CP-SAT constraint model built before solving, including variables, constraint groups, and the objective. Null when the model was not captured.

#### `deviceFamily` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Legacy group/series prefix (e.g. "R7FA8"). Prefer deviceFamilyKey for the true family.

#### `deviceFamilyKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Stable family key of the device ("RA", "RAFW", "RX").

#### `deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer part number associated with this result.

#### `durationSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Duration between start and completion in seconds.

#### `errors` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Errors encountered during solving.

#### `isFeasible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether a feasible solution was found.

#### `isOptimal` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the found solution is proven optimal.

#### `logs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Log lines collected during solving.

#### `objectiveValue` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Objective value reported by the solver (if applicable).

#### `portPresets` · [`[DmPortPreset!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-preset.md) non-null object

All ports on this board that carry a preset function preference, regardless of solver selection.

#### `requestedPeripherals` · [`[DmRequestedPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral.md) non-null object

Requested peripheral counts used as input to the solver.

#### `requestedTotalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of requested peripherals (sum of all requested counts).

#### `selections` · [`[DmInstanceSelection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-selection.md) non-null object

Selected peripheral instances with mode and pin mappings.

#### `solverStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Final status returned by the constraint solver.

#### `startedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

UTC timestamp when solving started.

#### `vendor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Silicon vendor of the device, e.g. "Renesas".

#### `wallTimeSeconds` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Wall-clock time spent solving (seconds).

#### `warnings` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Warnings emitted during solving or post-processing.

#### Deprecated

#### `completedOpModeGroups` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** No longer populated. Use 'selections' instead to inspect completed candidate instances.

Operation mode groups completed by the solution.
