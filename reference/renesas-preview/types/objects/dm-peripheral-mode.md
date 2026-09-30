---
title: "DmPeripheralMode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralMode

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

An operational mode for a peripheral instance that groups one or more operation mode configurations.

### Common Data Model

- [PeripheralMode](https://altiumdeveloper.github.io/cdm/classes/dm_PeripheralMode/) — A specific mode that a peripheral instance can fulfill,

### Member Of

[`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) object

```graphql
type DmPeripheralMode {
  display: String!
  name: String!
  opModes: [DmOpMode!]!
}
```

### Fields

#### `DmPeripheralMode.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display string representing the peripheral mode.

#### `DmPeripheralMode.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the peripheral mode (e.g., custom, async, sync).

#### `DmPeripheralMode.opModes` · [`[DmOpMode!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-op-mode.md) non-null object renesas-preview

Concrete operation mode configurations available within this peripheral mode.
