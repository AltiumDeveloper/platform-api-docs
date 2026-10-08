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

#### `connectionSetRefId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Reference identifier linking to a connection set definition (if applicable).

#### `dependencyPinConfigs` · [`[DmDependencyPinConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-dependency-pin-config.md) non-null object

List of pin dependencies to port mappings for this operation mode.

#### `display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display string representing the operation mode.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for the operation mode (group or configuration id).

#### `idConfig` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for the operation mode (group or configuration id).

#### `modePinConfigs` · [`[DmModePinConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mode-pin-config.md) non-null object

List of pin function to port mappings for this operation mode.

#### `pinSummary` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Readable summary of pin mappings for this operation mode.
