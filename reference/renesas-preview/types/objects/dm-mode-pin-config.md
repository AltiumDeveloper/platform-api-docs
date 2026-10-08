---
title: "DmModePinConfig"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mode-pin-config"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmModePinConfig

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Pin function to port mapping entry within an operation mode.

### Member Of

[`DmOpMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-op-mode.md) object

```graphql
type DmModePinConfig {
  channel: String
  display: String!
  pinFunction: String!
  pinName: String!
  pinValue: String!
  port: DmPort
  portName: String!
}
```

### Fields

#### `channel` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifies the specific virtualized channel used by this pin configuration. This field is applicable only when the associated peripheral instance uses channel-based virtualization and uniquely identifies the peripheral instance and function combination

#### `display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display representation of the pin mapping.

#### `pinFunction` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Logical pin function name (e.g., TXD, RXD).

#### `pinName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Fully qualified identifier representing the channel, and pin function (e.g., sci0.txt, iic1.scl).

#### `pinValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Fully qualified identifier representing the channel, pin function, and physical pin (e.g., sci0.txd.p101, iic1.scl.p402).

#### `port` · [`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) object

Physical port target for the pin function.

#### `portName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Physical port mapping target for the pin function.
