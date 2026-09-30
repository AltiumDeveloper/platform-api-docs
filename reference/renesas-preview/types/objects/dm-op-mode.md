---
title: "DmOpMode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-op-mode"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmOpMode

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Concrete operation mode configuration containing pin function assignments.

### Member Of

[`DmPeripheralMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode.md) object

```graphql
type DmOpMode {
  connectionSetRefId: String!
  dependencyPinConfigs: [DmDependencyPinConfig!]!
  display: String!
  id: String!
  idConfig: String!
  modePinConfigs: [DmModePinConfig!]!
  pinSummary: String!
}
```

### Fields

#### `DmOpMode.connectionSetRefId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Reference identifier linking to a connection set definition (if applicable).

#### `DmOpMode.dependencyPinConfigs` · [`[DmDependencyPinConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-dependency-pin-config.md) non-null object renesas-preview

List of pin dependencies to port mappings for this operation mode.

#### `DmOpMode.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display string representing the operation mode.

#### `DmOpMode.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the operation mode (group or configuration id).

#### `DmOpMode.idConfig` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the operation mode (group or configuration id).

#### `DmOpMode.modePinConfigs` · [`[DmModePinConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mode-pin-config.md) non-null object renesas-preview

List of pin function to port mappings for this operation mode.

#### `DmOpMode.pinSummary` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Readable summary of pin mappings for this operation mode.
