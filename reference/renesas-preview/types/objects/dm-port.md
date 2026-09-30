---
title: "DmPort"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPort

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A single device port with its functions, configurations, and connections.

### Common Data Model

- [Port](https://altiumdeveloper.github.io/cdm/classes/dm_Port/) — A physical port on the device, with its functions, configurations, and connections.

### Member Of

[`DmModePinConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mode-pin-config.md) object · [`DmPortModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-model.md) object

```graphql
type DmPort {
  comment: String!
  configurations: [DmPortConfiguration!]!
  connections: [DmPortConnection!]!
  functions: [DmPortFunction!]!
  id: String!
  isUserAssignable: Boolean!
  name: String!
  pin: DmPin!
  symbolicName: String!
}
```

### Fields

#### `DmPort.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Optional comment or description for the port.

#### `DmPort.configurations` · [`[DmPortConfiguration!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration.md) non-null object renesas-preview

Port configuration options applicable to this port.

#### `DmPort.connections` · [`[DmPortConnection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-connection.md) non-null object renesas-preview

Connections from this port to other components or signals.

#### `DmPort.functions` · [`[DmPortFunction!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-function.md) non-null object renesas-preview

Available functions that can be assigned to the port.

#### `DmPort.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique identifier for the port.

#### `DmPort.isUserAssignable` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this port can be assigned by the user.

#### `DmPort.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the port.

#### `DmPort.pin` · [`DmPin!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin.md) non-null object renesas-preview

Associated pin.

#### `DmPort.symbolicName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Symbolic name for the port used in code or configuration.
